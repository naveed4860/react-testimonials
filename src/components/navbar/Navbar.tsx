import React from "react";

import "./Navbar.scss";

const Navbar = (): React.ReactElement => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar__nav">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
        <a href="/">Login</a>
        <a href="/">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
