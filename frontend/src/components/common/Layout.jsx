import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/main.scss";
import GoogleSiteVerification from "../features/GoogleSiteVerification";
import {
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from "../features/GoogleTagManagerScript";

const Layout = ({ children, settings }) => {
  if (!settings) return null;

  return (
    <>
      <Helmet defaultTitle={settings?.data?.PageMetaTitle || "Default Title"}>
        <html lang={settings.lang} />
        {/* <GoogleSiteVerification /> */}
        {/* <GoogleTagManagerScript /> */}
      </Helmet>
      <>
        <div className="site">
          {/* <GoogleTagManagerNoScript /> */}
          <Header settings={settings} />
          <main className="site-main">{children}</main>
          <Footer settings={settings} />
        </div>
        {/* </IdeasProvider> */}
      </>
    </>
  );
};

export default Layout;
