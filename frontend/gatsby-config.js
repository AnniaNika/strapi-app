require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = require("./config/site-config.js");
const strapiOptions = require("./config/strapi-config.js");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  ...siteMetadata,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://127.0.0.1:1337",
        accessToken: "d8b8998e501e509c7b05df9a6e21c24351e676af35ba1a371d70b39124414d9a490b20c29dee2425cad98cbcfb139e23716a2633dcf2f127f5aa56608206d3b31ffeaf3cb3de10a2026baea0b1598b4191240d2f7c357b9648aa3de3542d440767f3800aeae5578be64a547b017696b532f3d769434bf8d48bd47629b7ade8bf",
        collectionTypes: ["page"],
        singleTypes: ["setting"]
      },
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        placeholder: "blurred",
        quality: 100,
        layout: "contstrained",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};