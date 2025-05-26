const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js");

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
        strapiHomepage {
          Blocks {
            __typename
          }
        }
        strapiAbout {
          blocks {
            __typename
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors,
    );

    return;
  }

  // result.allStrapiLogin.nodes.forEach((node) => {
  //   actions.createPage({
  //     path: "/login",
  //     component: path.resolve("./src/pages/login.js"),
  //   });
  // });

  const homepage = result.data.strapiHomepage;

  if (!homepage) {
    reporter.panic("strapiHomepage not returned from GraphQL");
  }

  actions.createPage({
    path: "/",
    component: path.resolve("./src/pages/index.js"),
    context: {
      homepage,
    },
  });

  const about = result.data.strapiAbout;

  if (!about) {
    reporter.panic("strapiAbout not returned from GraphQL");
  }

  actions.createPage({
    path: "/about",
    component: path.resolve("./src/pages/about.js"),
    context: {
      about,
    },
  });

  const articles = result.data.allStrapiArticle.nodes;

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      });
    });
  }
};
