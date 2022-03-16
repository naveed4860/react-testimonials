import { ReactElement, useState } from "react";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import "./Layout.scss";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="container">
      <header>
        <Navbar isOpen={showSidebar} toggleSidebar={toggleSidebar} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
