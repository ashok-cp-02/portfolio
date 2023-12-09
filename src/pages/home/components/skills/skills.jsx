// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
//? Components

//? CSS
import "./skills.scss";
//? Images
import HTMLicon from "./img/html5_icon.svg";
import CSSicon from "./img/css_icon.svg";
import SASSicon from "./img/sass_icon.svg";
import JSicon from "./img/javascript_icon.svg";
import Reacticon from "./img/reactjs_icon.svg";
import Reduxicon from "./img/redux_icon.svg";
import Jqueryicon from "./img/jquery_icon.svg";
import Resticon from "./img/restful_icon.svg";
//? JSON File

//? Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
// *******~ Import ~******** //

const Skills = () => {
  const KeySlill = [
    {
      Name: "HTML",
      CName: "html",
      Icon: <FaHtml5 />,
      Img: HTMLicon,
      value: 100,
    },
    {
      Name: "CSS",
      CName: "css",
      Icon: <FaCss3Alt />,
      Img: CSSicon,
      value: 95,
    },
    {
      Name: "JavaScript",
      CName: "javascript",
      Icon: <SiJavascript />,
      Img: JSicon,
      value: 90,
    },
    {
      Name: "Sass",
      CName: "sass",
      Icon: <IoLogoSass />,
      Img: SASSicon,
      value: 90,
    },
    {
      Name: "React Js",
      CName: "reactjs",
      Icon: <SiJavascript />,
      Img: Reacticon,
      value: 90,
    },
    {
      Name: "React Redux",
      CName: "reactredux",
      Icon: <SiJavascript />,
      Img: Reduxicon,
      value: 50,
    },
    {
      Name: "RESTFul API",
      CName: "restful",
      Icon: <SiJavascript />,
      Img: Resticon,
      value: 50,
    },
    {
      Name: "JQuery",
      CName: "jquery",
      Icon: <SiJavascript />,
      Img: Jqueryicon,
      value: 95,
    },
  ];
  return (
    <>
      <span id="skills"></span>
      <section className="skills-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2>Key Skills</h2>
                <p>
                  As a front-end developer, I am proficient in various
                  technologies Below <br />
                  And Various Other Libraries And Frameworks.
                </p>
              </div>
            </Col>
            <Col xxl={12}>
              <ul className="skill-list">
                {KeySlill.map((Skill, index) => (
                  <>
                    <li>
                      <div className="skill-box">
                        {/* <span>{Skill.Icon}</span> */}
                        <Image src={Skill.Img} fluid />
                        <p>{Skill.Name}</p>
                      </div>

                      <ProgressBar
                        className={`${Skill.CName}-progress`}
                        now={Skill.value}
                        animated
                        label={`${Skill.value}%`}
                      />
                    </li>
                  </>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Skills;
