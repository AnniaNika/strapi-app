module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://e-classthesis.netlify.app/"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
