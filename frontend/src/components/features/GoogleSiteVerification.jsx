import React from "react";

const GoogleSiteVerification = () => {
  const GOOGLE_TAG = "MRI6mafzLafqbsxOStnU1ktfWe-R4mf7QUHGTgZIcxk";

  if (!GOOGLE_TAG) return null;
  return <meta name="google-site-verification" content={GOOGLE_TAG} />;
};

export default GoogleSiteVerification;
