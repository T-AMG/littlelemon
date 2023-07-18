import React from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Header = ({ openNav }) => {
  return (
    <header>
      <Hamburger openNav={openNav} />
      <Link to="/">
        <img src="/assets/logo.svg" alt="littlelemon logo" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
