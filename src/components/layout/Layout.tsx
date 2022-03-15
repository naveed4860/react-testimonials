import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Testimonials from "../testimonials/Testimonials";

import "./Layout.scss";

const Layout = (): React.ReactElement => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
