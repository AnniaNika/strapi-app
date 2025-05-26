import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
// import ArticlesGrid from "../components/articles-grid";
import Seo from "../components/seo";
// import Headings from "../components/headings";
import UserInfo from "../components/UserInfo";

const AboutPage = ({ data }) => {
  const { Blocks } = data.page;
  console.log("data", data);

  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `);

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <main>
        {Blocks?.map((block) => {
          switch (block.strapi_component) {
            case "shared.user-info":
              return <UserInfo block={block} key={block.id} />;
            default:
              return null;
            // break
          }
        })}
      </main>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query aboutQuery {
    page: strapiAbout {
      blocks {
        ... on STRAPI__COMPONENT_SHARED_MEDIA {
          file {
            mime
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on STRAPI__COMPONENT_SHARED_QUOTE {
          id
          title
          body
        }
        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
          richTextBody: body {
            data {
              id
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;
