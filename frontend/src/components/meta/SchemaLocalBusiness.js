import React from "react";
import { Helmet } from "react-helmet";

const SchemaLocalBusiness = ({ image, settings, seoSiteUrl, description }) => {
  const imageWidth = image.dimensions ? image.dimensions.width : image.width;
  const imageHeight = image.dimensions ? image.dimensions.height : image.height;
  const businessInfo = settings?.BusinessInfo || settings;
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {    
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "${businessInfo.BusinessName}",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "${businessInfo.BusinessAddress}",
                "addressLocality": "${businessInfo.BusinessCity}",
                "addressRegion": "${businessInfo.BusinessRegion}",
                "postalCode": "${businessInfo.BusinessPostalCode}",
                "addressCountry": "${businessInfo.BusinessCountry}"
            },
            "telephone": "${businessInfo.BusinessPhoneNumber}",
            "email": "${businessInfo.BusinessEmail}",
            "url": "${seoSiteUrl}",
            "description": "${description}",
            "openingHours": "Mo-Fr 09:00-17:00",
            "image": {
                "@type": "ImageObject",
                "url": "${image.url}",
                "width": "${imageWidth}",
                "height": "${imageHeight}"
            }
        }
      `}</script>
    </Helmet>
  );
};

export default SchemaLocalBusiness;
