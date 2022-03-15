import React from "react";

import "./Navbar.scss";

const Navbar = (): React.ReactElement => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar__nav">
        <div className="navbar__nav__menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </div>
        <div className="navbar__bars">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
