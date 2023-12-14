// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//? Components

//? CSS
import "./project.scss";
//? Images

//? JSON File

//? Icons
// *******~ Import ~******** //

const Project = () => {
  return (
    <>
      <span id="project"></span>
      <section className="project-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Project</h2>
                <p data-aos="fade-up">
                  {/* Explore my front-end development prowess through a curated
                  showcase of projects,
                  <br /> highlighting innovative designs and seamless user
                  experiences. <br /> */}
                  Each project reflects my commitment to creating visually
                  stunning and <br />
                  functionally robust web applications.
                </p>
              </div>
              <Link to="/project">View All</Link>
            </Col>
            <Col xxl={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Project;
