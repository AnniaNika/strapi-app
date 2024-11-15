/* eslint-disable react/no-array-index-key */
import React from "react";

const Footer = ({ settings }) => {
  if (!settings) return null;

  return (
    <footer className="mt-4 mb-md-5">
      <h2>Footer</h2>
    </footer>
  );
};

export default Footer;
