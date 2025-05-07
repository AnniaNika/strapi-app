const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
        allStrapiHomepage {
          nodes {
            id
          }
        }
        allStrapiLogin {
          nodes {
            Blocks {
              registerForm
              id
              strapi_component
              strapi_id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  result.allStrapiLogin.nodes.forEach((node) => {
    actions.createPage({
      path: "/login",
      component: path.resolve("./src/pages/login.js"),
    })
  })

  result.allStrapiHomepage.nodes.forEach((node) => {
    actions.createPage({
      path: "/",
      component: path.resolve("./src/pages/index.js"),
    })
  })

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }
}
