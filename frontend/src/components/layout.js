import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allStrapiNavigation {
        nodes {
          NavigationColumn {
            label
            navSlug
          }
        }
      }
      allStrapiGlobal {
        nodes {
          siteName
          siteDescription
          favicon {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  const { allStrapiNavigation, allStrapiGlobal } = data;
  const { nodes: navigationNodes } = allStrapiNavigation;
  const { nodes: globalNodes } = allStrapiGlobal;

  console.log("data", data);

  return (
    <div className="flex min-h-screen justify-between text-neutral-900">
      <div className="w-1/4">
        <Navbar data={navigationNodes} global={globalNodes} />
      </div>
      <div className="w-3/4">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
