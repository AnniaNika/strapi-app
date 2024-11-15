import React from "react";

const Header = ({ settings }) => {
  if (!settings) return null;

  return (
    <header>
      <h2>Header</h2>
    </header>
  );
};

export default Header;
