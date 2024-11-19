import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-between text-neutral-900">
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-3/4">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
