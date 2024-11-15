import React from "react";
import { Helmet } from "react-helmet";

const SchemaOrganization = ({
  name,
  alternateName,
  url,
  email,
  logo,
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "${name}",
          "alternateName": "${alternateName}",
          "url": "${url}",
          "logo": "${logo}",
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaOrganization;
