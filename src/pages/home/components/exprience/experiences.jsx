// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
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
            <Col xxl={12}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="justify-content-center">
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Work Experience (2018 to 2019):
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={6}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        Fusion Innovative Limited (Hardee Software Solutions PVT
                        LTD).,Chennai.
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Experiences;
