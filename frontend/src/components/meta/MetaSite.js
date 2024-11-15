import React from "react";
import { Helmet } from "react-helmet";

const MetaSite = ({
  title,
  description,
  image,
  url,
  siteUrl,
  lang,
  altLangs,
}) => {
  const alternates =
    altLangs &&
    altLangs.map((altlang) => {
      return (
        <link
          rel="alternate"
          href={siteUrl.href}
          hrefLang={altlang.lang}
          key={altlang.lang}
        />
      );
    });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {image && <meta property="image" content={image.url} />}
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang={lang} />
      {alternates}
      {/* <link type="text/plain" rel="author" href={`${siteUrl}/humans.txt`} /> */}
    </Helmet>
  );
};

export default MetaSite;
