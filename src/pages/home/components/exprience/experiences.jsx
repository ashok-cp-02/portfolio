// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//? Components

//? CSS
import "./experiences.scss";
//? Images

//? JSON File

//? Icons
// *******~ Import ~******** //

const Experiences = () => {
  return (
    <>
      <span id="experiences"></span>
      <section className="experiences-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Work Experiences</h2>
                <p data-aos="fade-up">
                  As a front-end developer, I am proficient in various
                  technologies Below <br />
                  And Various Other Libraries And Frameworks.
                </p>
              </div>
            </Col>
            <Col xxl={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Experiences;
