// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
//? Components

//? CSS
import "./project.scss";
//? Images
import PhonePanel from "./img/phone-mokup.png";
// import MobScreen from "./img/mob-screen.jpeg";

import MobScreen from "./img/Screenshot_20231216-151334.png";
//? JSON File

//? Icons
// *******~ Import ~******** //

const Project = () => {
  return (
    <>
      <section className="project-section" id="project">
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
            <Col xxl={4}></Col>
            <Col xxl={4} xl={3}>
              <div className="mobile-view">
                {/* <Image src={PhonePanel} fluid className="mob-panel-img" /> */}
                <Image src={PhonePanel} fluid className="mob-panel-img" />
                <Image src={MobScreen} fluid className="mob-screen-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Project;
