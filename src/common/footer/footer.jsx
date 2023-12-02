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
// *******~ Import ~******** //

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xxl={12}>
            <p>Footer Section</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
