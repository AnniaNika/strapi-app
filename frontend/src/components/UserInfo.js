import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/user-info.scss";

const UserInfo = ({ block }) => {
  const { greeting, id, strapi_component } = block;
  // console.log("block", block);

  return (
    <section className="userinfo-section container">
      <div className="flex flex-row text-center">
        <h3>{greeting} user_id</h3>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`;

export default UserInfo;
