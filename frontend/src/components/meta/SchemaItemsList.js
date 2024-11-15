import React from "react";
import { Helmet } from "react-helmet";

const SchemaItemsList = ({ items, siteUrl }) => {
  const listItems = items.edges.map(
    (item, index) => `{
    "@type":"ListItem",
    "position":${index + 1},
    "url":"${new URL(item.node.url, siteUrl)}"
  }`
  );
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context":"https://schema.org",
          "@type":"ItemList",
          "itemListElement":[${listItems.join(",")}]
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaItemsList;
