// *******~ Import ~******** //
// React
import React, { useContext, useState } from "react";
// Assets

import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Components
import ThemeContext from "../theme/components/contexts/themecontexts";
import MenuBtn from "./menubtn/menubtn";
import myResumePDF from "../assets/ASHOK-RESUME.pdf";
import Contact from "../../pages/contact/contact";
// CSS
import "./css/header.scss";
// Images
import LogoLight from "./img/fmb-logo-white.svg";
import LogoDark from "./img/fmb-logo-dark.svg";
// Responsive Img

// Icons
import { FaLaptopCode } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

// *******~ Import ~******** //

const Header = (params) => {
  const { theme } = useContext(ThemeContext);
  const [Contactshow, setContactshow] = useState(false);
  const ContacthandleShow = () => setContactshow(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };
  const MenuData = [
    {
      menu: "Home",
      url: "/#home",
      as: HashLink,
    },

    {
      menu: "About",
      url: "/#about",
      as: HashLink,
    },
    {
      menu: "Skills",
      url: "/#skills",
      as: HashLink,
    },
    {
      menu: "Work Experiences",
      url: "/#experiences",
      as: HashLink,
    },
    {
      menu: " Project",
      url: "/#project",
      as: HashLink,
    },
    {
      menu: "Education",
      url: "/#education",
      as: HashLink,
    },
  ];
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myResumePDF;
    link.download = "ashok-resume.pdf"; // Change the filename as needed
    link.click();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="main-header">
        <Container>
          <div className="logo">
            <>
              <Nav.Link as={Link} to={"/"} eventKey={0}>
                {/* <span className="icon">
                  <FaLaptopCode />
                </span> */}
                {/* {theme === "light" ? (
                  <Image src={LogoDark} alt="" />
                ) : (
                  <Image src={LogoDark} alt="" />
                )} */}
                <div className="name">
                  <p className="code">{"<"} </p>
                  Ashok C<p className="code">{"/>"}</p>
                </div>
                <div className="desgi">
                  <p>Front End Developer</p>
                </div>
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

              {MenuData.map((data, index) => (
                <>
                  <Nav.Link
                    as={data.as}
                    to={data.url}
                    key={index}
                    eventKey={index}
                    smooth
                    scroll={(el) => scrollWithOffset(el)}
                    active={index === activeIndex}
                    onClick={() => handleNavLinkClick(index)}
                  >
                    {data.menu}
                  </Nav.Link>
                </>
              ))}
              <Nav.Link onClick={ContacthandleShow}>Contact</Nav.Link>
            </Nav>
            <Nav>
              <a className="get-btn " onClick={handleDownload}>
                <GrDocumentDownload /> Resume
                <span></span>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default Header;
