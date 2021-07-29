import React from "react";
//import { Link } from "gatsby";
import PropTypes from "prop-types";
//import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import Embed from "react-song-embed";

const Header = ({ siteTitle }) => (
  <header>
    <Embed
      /*rel="preload"*/
      samesite="none"
      url="https://album.link/scwks7vqn9p2n"
      height={52}
      dark
      style={{
        display: "inline",
        position: "fixed",
        zIndex: "20",
        top: 0,
        left: 0,
        right: 0,
      }}
    />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
