import React from "react";

import "./Footer.scss";

const Footer = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <a href="/">© 2022 Copyright</a>
      </div>
      <div className="footer__social">
        <a href="/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-pinterest-p"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
