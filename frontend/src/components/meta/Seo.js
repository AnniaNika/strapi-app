import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MetaSite from "./MetaSite"
import MetaSocial from "./MetaSocial"
import SchemaWebsite from "./SchemaWebsite"
import SchemaOrganization from "./SchemaOrganization"
import SchemaNewsArticle from "./SchemaNewsArticle"
import SchemaItemsList from "./SchemaItemsList"

// SEO Data
// ----------------------------------------------------------------------------
// Pass the entire page object to automatically populate all fields.
//
// Use individual props (ie: "title", "description" etc) on each page to
// override this field from page object.
//
// Fallback values are the siteMetadata defined in config/site-config.js.
// ----------------------------------------------------------------------------

const Seo = ({
  page,
  itemsList,
  title,
  shortTitle,
  description,
  image,
  url,
  siteUrl,
  lang,
  logoUrl,
}) => {
  const config = useStaticQuery(graphql`
    {
      site {
          siteMetadata {
            title
            shortTitle
            description
            logoUrl
            siteUrl
            siteLang

            defaultImage
            defaultImageWidth
            defaultImageHeight
            defaultImageAlt

            BusinessAddress
            BusinessCity
            BusinessCountry
            BusinessEmail
            BusinessName
            BusinessPhoneNumber
            BusinessPostalCode
            BusinessRegion
          }
        }
    }
  `)

  //? The variables we need are below
  //* From Meta
  // seoTitle
  // seoDescription
  // seoImage
  // shortTitle
  //* From Page Data
  // pageUrl
  // lang
  // altLangs
  //* From siteMetadata or site Settings
  // siteUrl
  // name
  // alternateName
  // logo
  //* From Post** Data
  // authorAlternateName
  // authorLogo
  // authorName
  // authorUrl
  // datePublished
  // headline

  const fallback = config.site.siteMetadata
  console.log("Fallback -->", fallback)

  // Main page title
  let seoTitle = fallback.title
  if (title) {
    seoTitle = title
  } else if (page) {
    const metaTitle = page.Meta.pageMetaTitle || ""
    const pageTitle = page.PageTitle
    if (metaTitle && metaTitle !== "") {
      seoTitle = metaTitle
    } else if (pageTitle && pageTitle !== "") {
      seoTitle = pageTitle.text || pageTitle
    }
  }

  const titleBrand = new RegExp(`${fallback.shortTitle}$`, "gm").test(seoTitle)
    ? ""
    : ` | ${fallback.shortTitle}`

  seoTitle += titleBrand

  // Short title
  const seoShortTitle = shortTitle || fallback.shortTitle

  // Page description
  let seoDescription = fallback.description
  if (description) {
    seoDescription = description
  } else if (page) {
    const { PageMetaDescription: metaDescription } = page.Meta
    if (metaDescription) {
      seoDescription = metaDescription
    }
  }

  // Page URL
  let seoUrl = fallback.siteUrl
  seoUrl = url || (page && page.slug) || ""
  seoUrl = new URL(seoUrl, fallback.siteUrl).href
  console.log("Seo url -->", seoUrl)

  // Site URL
  const seoSiteUrl = siteUrl || fallback.siteUrl

  // Page language
  let seoLang = fallback.siteLang
  if (lang) {
    seoLang = lang
  } else if (page) {
    if (page.lang && page.lang !== "") {
      seoLang = page.lang
    }
  }

  // Site Logo URL
  const seoLogoUrl = logoUrl || fallback.logoUrl

  // Page Image
  // --------------------------------------------------------------------------
  // Must be an object which includes the keys "url", "alt", "dimensions".
  // "dimensions" must include the keys "height" and "width".
  let seoImage = {
    url: fallback.defaultImage,
    alt: fallback.defaultImageAlt,
    dimensions: {
      height: fallback.defaultImageHeight,
      width: fallback.defaultImageWidth,
    },
  }
  if (image && image.url && image.url !== "") {
    seoImage = image
  } else if (page) {
    const { PageMetaImage: metaImage } = page.Meta
    if (metaImage && metaImage.url && metaImage.url !== "") {
      seoImage = metaImage
    }
  }

  return (
    <>
      <MetaSite
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        url={seoUrl}
        siteUrl={seoSiteUrl}
        lang={seoLang}
        altLangs={page && page.alternate_languages}
      />
      <MetaSocial
        title={seoTitle}
        shortTitle={seoShortTitle}
        description={seoDescription}
        image={seoImage}
        url={seoUrl}
      />
      <SchemaWebsite
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        url={seoUrl}
        siteUrl={seoSiteUrl}
      />
      <SchemaOrganization
        name={fallback.shortTitle}
        alternateName={fallback.title}
        url={fallback.siteUrl}
        logo={seoLogoUrl}
      />
      {page && page.type === "post" && (
        <SchemaNewsArticle
          headline={seoTitle}
          image={seoImage}
          datePublished={
            page.data.publication_date || page.first_publication_date
          }
          authorName={fallback.shortTitle}
          authorAlternateName={fallback.title}
          authorUrl={fallback.siteUrl}
          authorLogo={seoLogoUrl}
        />
      )}
      {itemsList && <SchemaItemsList items={itemsList} siteUrl={seoSiteUrl} />}
    </>
  )
}

export default Seo
