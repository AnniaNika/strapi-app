import React from "react";
import { Helmet } from "react-helmet";

const MetaSocial = ({ title, shortTitle, description, image, url }) => {

  const imageWidth = image.dimensions ? image.dimensions.width : image.width;
  const imageHeight = image.dimensions ? image.dimensions.height : image.height;
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={shortTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      {image.alt && <meta property="og:image:alt" content={image.alt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
      {image.alt && <meta name="twitter:image:alt" content={image.alt} />}
    </Helmet>
  );
};

export default MetaSocial;
