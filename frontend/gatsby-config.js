require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              // publicationState:
              //   process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
          {
            singularName: "page",
            queryParams: {
              populate: {
                Content: {
                  populate: {
                    slug: {
                      populate: "*",
                    },
                    pageTitle: {
                      populate: "*",
                    },
                    meta: { populate: "*" },
                    metaTitle: {
                      populate: "*",
                    },
                    metaDescription: {
                      populate: "*",
                    },
                    metaImage: {
                      populate: "*",
                    },
                  },
                },
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                logo: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "homepage",
            queryParams: {
              populate: {
                Blocks: {
                  populate: {
                    UserInfo: {
                      populate: "*",
                    },
                  },
                },
              },
            },
          },
          {
            singularName: "navigation",
            queryParams: {
              populate: {
                NavigationColumn: {
                  populate: {
                    Item: {
                      populate: "*",
                    },
                  },
                },
              },
            },
          },
          {
            singularName: "login",
            queryParams: {
              populate: {
                Blocks: {
                  populate: {
                    LoginForm: {
                      populate: "*",
                    },
                  },
                },
                Image: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
  ],
}
