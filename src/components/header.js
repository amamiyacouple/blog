import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import coupleImg from "../images/coupleheader2.jpg"

const Header = ({ siteTitle }) => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand as={Link} href="/">
      <img src={coupleImg} style={{maxHeight:'640px',maxWidth:'320px', marginBottom:`2rem`}} /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            プロフィール
          </Nav.Link>
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/information">
            記事
          </Nav.Link>
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/contact_Netlify">
            お仕事依頼
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
