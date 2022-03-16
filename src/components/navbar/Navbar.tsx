import { ReactElement, ReactEventHandler } from "react";

import "./Navbar.scss";

type NavbarProps = {
  toggleSidebar: ReactEventHandler;
  isOpen: boolean;
};

const Navbar = ({ toggleSidebar, isOpen }: NavbarProps): ReactElement => {
  const nav = isOpen ? "navbar__navopen open" : "navbar__nav";
  const navMenu = isOpen ? "navbar__navopen__menu" : "navbar__nav__menu";
  const bars = isOpen ? "fa-solid fa-xmark fa-2x" : "fa-solid fa-bars fa-2x";

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className={`${nav}`}>
        <div className={`${navMenu}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
      <div className="navbar__bars" onClick={toggleSidebar}>
        <i className={`${bars}`}></i>
      </div>
    </div>
  );
};

export default Navbar;
