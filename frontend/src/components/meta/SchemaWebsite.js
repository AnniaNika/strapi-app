import React from "react";
import { Helmet } from "react-helmet";

const SchemaWebsite = ({ title, description, image, url, siteUrl }) => {
  const imageWidth = image.dimensions ? image.dimensions.width : image.width;
  const imageHeight = image.dimensions ? image.dimensions.height : image.height;
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "url": "${url}",
          "name": "${title}",
          "description": "${description}",
          "image": {
            "@type": "ImageObject",
            "url": "${image.url}",
            ${image.alt ? `"description":"${image.alt}",` : ``}
            "width": "${imageWidth}",
            "height": "${imageHeight}"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${siteUrl}"
          }
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaWebsite;
