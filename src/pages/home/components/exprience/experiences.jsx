// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//? Components

//? CSS
import "./experiences.scss";
//? Images

//? JSON File

//? Icons
// import { MdWorkHistory } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
// *******~ Import ~******** //

const Experiences = () => {
  const [key, setKey] = useState("exp4");
  const ExpLists = [
    {
      Role: "Jr. UI Developer",
      OrgName: "RSN Infotech PVT LTD., Dharmapuri",
      Duration: "- Aug 2018 to Nov 2019",
      Url: {
        Path: "https://www.rsninfotech.com/",
        Name: "- www.rsninfotech.com",
      },
      Responsibilitys: [
        "Developing highly interactive front-end user interfaces for web applications with a responsive layout using HTML, CSS, JavaScript, Bootstrap and various other libraries and frameworks.",
        "Ensured cross-browser compatibility and responsiveness using media queries and flexbox layouts.",
      ],
    },
    {
      Role: "Jr. UI Developer",
      OrgName: "Neowep Software Solution., Dharmapuri",
      Duration: "- Dec 2019 to Jan 2022",
      Url: {
        Path: "http://www.neowep.com/",
        Name: "- www.neowep.com",
      },
      Responsibilitys: [
        "Developing highly interactive front-end user interfaces for web applications with a responsive layout using HTML, CSS, JavaScript, React Js, Sass, Bootstrap and various other libraries and frameworks.",
        "Ensured cross-browser compatibility and responsiveness using media queries and flexbox layouts.",
      ],
    },
    {
      Role: "Sr. UI Developer",
      OrgName: "Fusion Innovative Limited., Chennai",
      OrgSubName: "( A unit of Hardee Software Solution PVT LTD )",
      Duration: "- Mar 2022 to Nov 2023",
      Url: {
        Path: "https://www.fusioninnovative.com/",
        Name: "- www.fusioninnovative.com",
      },
      Responsibilitys: [
        "Developing highly interactive single page applications and build the reusable components using React js, React Bootstrap, Material UI and various other libraries and frameworks.",
        "Solid understanding of async request handling, props, and hooks.",
        "Possess a keen eye for detail and have the ability to translate wireframes and design concepts into pixel-perfect creations.",
        "Ensured cross-browser compatibility and responsiveness using media queries and flexbox/grid layouts.",
        "Managed codebase efficiently using Git and GitHub for version control.",
      ],
    },
    {
      Role: "Sr. React Developer",
      OrgName: "ISC Global Solutions Private Limited",
      OrgSubName: "",
      Duration: "- Jan 2024 to still",
      Url: {
        Path: "/",
        Name: "",
      },
      Responsibilitys: [
        "Developing highly interactive single page applications and build the reusable components using React js, React Bootstrap, Material UI and various other libraries and frameworks.",
        "Solid understanding of async request handling, props, and hooks.",
        "Possess a keen eye for detail and have the ability to translate wireframes and design concepts into pixel-perfect creations.",
        "Ensured cross-browser compatibility and responsiveness using media queries and flexbox/grid layouts.",
        "Managed codebase efficiently using Git and GitHub for version control.",
      ],
    },
  ];
  return (
    <>
      <span id="experiences"></span>
      <section className="experiences-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Professional Experience</h2>
                <p data-aos="fade-up">
                  Experienced UI Developer proficient in crafting responsive and{" "}
                  <br /> visually appealing web interfaces.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xxl={8} md={10} lg={10}>
              <div className="experience-tab-div">
                <Tabs
                  id="experience-tab"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                >
                  {ExpLists.map((explist, index) => (
                    <Tab
                      key={`exp${index + 1}`}
                      eventKey={`exp${index + 1}`}
                      title={`${index + 1}`}
                    >
                      <div className="experience-content" data-aos="fade-up">
                        <div className="header-div">
                          <div className="title-div">
                            <h3>{explist.Role}</h3>
                            <p>{explist.Duration}</p>
                          </div>
                          <div className="org-name">
                            <div className="org">
                              <h3>{explist.OrgName}</h3>
                              {explist.OrgSubName && (
                                <span>{explist.OrgSubName}</span>
                              )}
                            </div>

                            <a
                              className="stack"
                              href={explist.Url.Path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {explist.Url.Name}
                            </a>
                          </div>
                        </div>
                        <div className="roles-respons">
                          <h3>Roles and Responsibilities:</h3>

                          <ul>
                            {explist.Responsibilitys.map(
                              (Responsibility, index) => (
                                <>
                                  <li key={index}>
                                    <IoMdArrowDropright />
                                    <p>{Responsibility}</p>
                                  </li>
                                </>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Experiences;
