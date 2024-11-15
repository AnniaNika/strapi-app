import React from "react";
import { Helmet } from "react-helmet";

const SchemaNewsArticle = ({
  headline,
  image,
  datePublished,
  authorName,
  authorAlternateName,
  authorUrl,
  authorLogo,
}) => {
  let published = "";
  if (datePublished) {
    const dateParts = datePublished.split("/");
    published = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    if (published instanceof Date && published.toString() !== "Invalid Date") {
      published = published.toISOString();
    } else {
      published = datePublished;
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${headline}",
          "image": [
            {
              "@type": "ImageObject",
              "url": "${image.url}",
              ${image.alt ? `"description":"${image.alt}",` : ``}
              "width": "${image.dimensions.width}",
              "height": "${image.dimensions.height}"
            }
          ],
          "datePublished": "${published}",
          "author": [{
            "@type": "Organization",
            "name": "${authorName}",
            "alternateName": "${authorAlternateName}",
            "url": "${authorUrl}",
            "logo": "${authorLogo}"
          }]
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaNewsArticle;
