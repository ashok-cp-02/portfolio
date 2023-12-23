// *******~ Import ~******** //
//? React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
//? Components
import ProjectData from "./projectdata";
//? CSS
import "./project-details.scss";
//? Images

//? JSON File

//? Icons
import { IoIosArrowForward } from "react-icons/io";
// *******~ Import ~******** //

const ProjectDetail = () => {
  const { path } = useParams();
  const [Project, setProject] = useState(null);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const foundPost = ProjectData.find((proj) => proj.path === path);
        setProject(foundPost);
      } catch (error) {
        console.log("Error fetching blog post:", error);
      }
    };

    fetchProject();
  }, [path]);
  return (
    <>
      {Project ? (
        <section className="project-details">
          <div className="image-div">
            <div className="overlay"></div>
            <Image src={Project.banner} alt="" />
            <div className="heading-content">
              <h5>Project Details</h5>
              <p>
                <Link to="/project">Project</Link> <IoIosArrowForward />{" "}
                {Project.title}
              </p>
            </div>
          </div>
          <Container>
            <Row>
              <Col xxl={12}>
                <br />
                <h1 className="text-center under-text"> Under Construction</h1>
                <br />
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <p>Post not found</p>
      )}
    </>
  );
};
export default ProjectDetail;
