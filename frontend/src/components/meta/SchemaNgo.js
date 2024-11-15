import React from "react";
import { Helmet } from "react-helmet";

const SchemaNgo = ({ image, settings, seoSiteUrl, description }) => {
  const imageWidth = image.dimensions ? image.dimensions.width : image.width;
  const imageHeight = image.dimensions ? image.dimensions.height : image.height;
  console.log("Business Info schemango -->", settings)

  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "NGO",
            "name": "${settings.BusinessName}",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "${settings.BusinessAddress}",
                "addressLocality": "${settings.BusinessCity}",
                "addressRegion": "${settings.BusinessRegion}",
                "postalCode": "${settings.BusinessPostalCode}",
                "addressCountry": "${settings.BusinessCountry}"
            },
            "telephone": "${settings.BusinessPhoneNumber}",
            "email": "${settings.BusinessEmail}",
            "url": "${seoSiteUrl}",
            "description": "${description}",
            "image": {
                "@type": "ImageObject",
                "url": "${image.url}",
                "width": "${imageWidth}",
                "height": "${imageHeight}"
            },
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaNgo;
