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
import ProjectData from "./projectdata";
//? CSS
import "./project.scss";
//? Images

//? JSON File

//? Icons
import { IoIosArrowDropright } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { PiPlaceholderBold } from "react-icons/pi";
import { TbProgressBolt } from "react-icons/tb";
// *******~ Import ~******** //

const Project = () => {
  const statusMap = {
    0: "Inprogress",
    1: "Completed",
    2: "Hold",
  };
  return (
    <>
      <section className="project-list-page">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2>My Project</h2>
                <p>
                  As a front-end developer, I am proficient in various
                  technologies Below <br />
                  And Various Other Libraries And Frameworks.
                </p>
              </div>
            </Col>
            {ProjectData.map((projectlist, index) => (
              <>
                <Col xxl={6}>
                  <div className="project-box" key={index}>
                    <div className="img-div">
                      <Image src={projectlist.banner} fluid />
                      {/* <div className="overlay-shadow"></div> */}
                      <span>{projectlist.type}</span>
                    </div>
                    <div className="content">
                      <h1>{projectlist.title}</h1>
                      <p className="desc">{projectlist.disc}</p>
                      <ul>
                        {projectlist.tech.map((tec, index) => (
                          <>
                            <li key={index}>
                              <Image src={tec} fluid />
                            </li>
                          </>
                        ))}
                      </ul>
                      <div className="duration">
                        <p className="time">
                          <span>Duration:</span> {projectlist.date.startdate} to{" "}
                          {projectlist.date.enddate.length === 0
                            ? "Present"
                            : projectlist.date.enddate}
                        </p>
                        <p
                          className={`status ${statusMap[
                            projectlist.status
                          ]?.toLowerCase()}`}
                        >
                          {projectlist.status === 0 ? (
                            <TbProgressBolt />
                          ) : projectlist.status === 1 ? (
                            <MdDone />
                          ) : (
                            projectlist.status === 2 && <PiPlaceholderBold />
                          )}
                          {statusMap[projectlist.status] || "Unknown Status"}
                        </p>
                      </div>

                      <div className="footer-div">
                        <a
                          className="live-demo"
                          href={projectlist.liveurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={projectlist.liveurl}
                        >
                          <TbWorld /> Live Demo
                        </a>
                        <Link
                          className="readmore-btn"
                          to={`/project/${projectlist.path}`}
                        >
                          More Details <IoIosArrowDropright />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Project;
