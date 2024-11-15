const siteMetadata = {
  siteUrl: "https://www.**PLACEHOLDER**.gr",
  siteLang: "el-GR", // This should be the same as Prismic master locale
  title: "",
  shortTitle: "",
  description: "",
  logoUrl: "http://localhots:8000/images/logo.png",

  // Values used in manifest
  siteBackgroundColor: "#fff",
  siteThemeColor: "#000",
  siteIcon: "./src/images/icon.png",

  // Image Details used as fallback at metadata
  defaultImage: "http://localhots:8000/images/logo.png",
  defaultImageWidth: "512",
  defaultImageHeight: "512",
  defaultImageAlt: "**PLACEHOLDER** logo",

  // Business Information
  BusinessName: "",
  BusinessAddress: "",
  BusinessCity: "",
  BusinessRegion: "",
  BusinessPostalCode: "",
  BusinessCountry: "",
  BusinessPhoneNumber: "",
  BusinessEmail: "info@**PLACEHOLDER**.gr",
};

module.exports = {
  siteMetadata,
};
