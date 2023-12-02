// *******~ Import ~******** //
// React
import React, { useContext } from "react";
// Assets

import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Components
import ThemeContext from "../theme/components/contexts/themecontexts";
import MenuBtn from "./menubtn/menubtn";
// CSS
import "./css/header.scss";
// Images
import LogoLight from "./img/fmb-logo-white.svg";
import LogoDark from "./img/fmb-logo-dark.svg";
// Responsive Img

// Icons

// *******~ Import ~******** //

const Header = (params) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="main-header">
        <Container>
          <div className="logo">
            <>
              <Nav.Link as={Link} to={"/"} eventKey={0}>
                {/* {theme === "light" ? (
                  <Image src={LogoDark} alt="" />
                ) : (
                  <Image src={LogoDark} alt="" />
                )} */}
                Ashok C
              </Nav.Link>
            </>
          </div>
          <MenuBtn />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-menu-div">
              {/* <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  Point of Sale (POS)
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Project
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
