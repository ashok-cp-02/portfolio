// *******~ Import ~******** //
//? React
import React, { useEffect } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
//? Components

//? CSS
import "./education.scss";
//? Images

//? JSON File

//? Icons
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
// *******~ Import ~******** //

const Education = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const EducationList = [
    {
      title: "B.Sc (Computer Science ) - 2015 to 2018",
      study:
        "Periyar University College of Arts & Science (Constituent) College.",
      location: "Pappireddipatti, Dharmapuri.",
      mark: "66",
    },
    {
      title: "HSC – 2015",
      study: "Govt, Higher Secondary School.",
      location: "Menasi, Dharmapuri.",
      mark: "61.5",
    },
    {
      title: "SSLC – 2013",
      study: "Govt, Higher Secondary School.",
      location: "Menasi, Dharmapuri.",
      mark: "60",
    },
  ];
  return (
    <>
      <span id="educational"></span>
      <section className="education-section">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Educational</h2>
                <p data-aos="fade-up">
                  My academic journey has equipped me with the knowledge to
                  <br /> excel in the role of UI Developer
                </p>
              </div>
            </Col>
            <Col xxl={8} md={10} lg={8}>
              <Accordion defaultActiveKey={0}>
                {EducationList.map((list, index) => (
                  <Accordion.Item
                    eventKey={index}
                    id={index}
                    data-aos="flip-up"
                  >
                    <Accordion.Header>
                      <span>
                        <FaGraduationCap />
                      </span>

                      <span>{list.title}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <span>
                          <FaUniversity />
                        </span>
                        <span>{list.study}</span>
                      </p>
                      <p>
                        <span>
                          <FaLocationDot />
                        </span>
                        <span>{list.location}</span>
                      </p>
                      <p>
                        <span>
                          <FaAward />
                        </span>
                        <span>{list.mark}% of Marks</span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Education;
