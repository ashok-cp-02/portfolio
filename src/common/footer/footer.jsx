// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//? Components

//? CSS
import "./footer.scss";
//? Images

//? JSON File

//? Icons
import { IoHeart } from "react-icons/io5";
// *******~ Import ~******** //

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xxl={12}>
            <p>
              &copy; {new Date().getFullYear()}, Made With <IoHeart /> by Ashok
              C
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
