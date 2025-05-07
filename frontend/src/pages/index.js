import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// import ArticlesGrid from "../components/articles-grid";
import Seo from "../components/seo"
// import Headings from "../components/headings";
import UserInfo from "../components/UserInfo"

const IndexPage = ({ data }) => {
  const { Blocks } = data.page
  console.log("data", data)

  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      {/* <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      /> */}
      <main>
        {Blocks?.map((block) => {
          switch (block.strapi_component) {
            case "shared.user-info":
              return <UserInfo block={block} key={block.id} />
            default:
              return null
            // break
          }
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query homepageQuery {
    page: strapiHomepage {
      Blocks {
        ... on STRAPI__COMPONENT_SHARED_USER_INFO {
          id
          strapi_component
          greeting
        }
      }
    }
  }
`
