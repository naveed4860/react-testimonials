import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import "./Layout.scss";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
