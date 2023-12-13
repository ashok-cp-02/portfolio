// *******~ Import ~******** //
//? React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//? Components
import ProjectData from "./projectdata";
//? CSS

//? Images

//? JSON File

//? Icons
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
    <section className="sample">
      <Container>
        <Row>
          <Col xxl={12}>
            <h1>ProjectDetail</h1>
            {Project ? <p>{Project.title}</p> : <p>Post not found</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ProjectDetail;
