// *******~ Import ~******** //
//? React

//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

// import "aos/dist/aos.css"; // Import the AOS styles
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
import Booticon from "./img/bootstrap-5-1.svg";
import ReactBooticon from "./img/react-boot.svg";
import MUIicon from "./img/material-ui-1.svg";
import GITicon from "./img/git-icon.svg";
import VSCodeicon from "./img/vscode.svg";
// import Sourceicon from "./img/sourcetree-1.svg";
//? JSON File

//? Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
// *******~ Import ~******** //

const Skills = () => {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);

  const KeySkill = [
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
      Name: "Bootstrap",
      CName: "boots",
      Icon: <SiJavascript />,
      Img: Booticon,
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
      Name: "JQuery",
      CName: "jquery",
      Icon: <SiJavascript />,
      Img: Jqueryicon,
      value: 95,
    },
    {
      Name: "React Js",
      CName: "reactjs",
      Icon: <SiJavascript />,
      Img: Reacticon,
      value: 90,
    },
    {
      Name: "React Bootstrap",
      CName: "reactboots",
      Icon: <SiJavascript />,
      Img: ReactBooticon,
      value: 90,
    },
    {
      Name: "Material UI",
      CName: "materialui",
      Icon: <SiJavascript />,
      Img: MUIicon,
      value: 75,
    },
    {
      Name: "React Redux",
      CName: "reactredux",
      Icon: <SiJavascript />,
      Img: Reduxicon,
      value: 75,
    },
    {
      Name: "RESTFul API",
      CName: "restful",
      Icon: <SiJavascript />,
      Img: Resticon,
      value: 75,
    },

    {
      Name: "GIT",
      CName: "git",
      Icon: <SiJavascript />,
      Img: GITicon,
      value: 85,
    },
    {
      Name: "VS Code",
      CName: "vscode",
      Icon: <SiJavascript />,
      Img: VSCodeicon,
      value: 85,
    },
    // {
    //   Name: "Sourcetree",
    //   CName: "sourcetree",
    //   Icon: <SiJavascript />,
    //   Img: Sourceicon,
    //   value: 85,
    // },
  ];

  return (
    <>
      <span id="skills"></span>
      <section className="skills-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Technical Skills</h2>
                <p data-aos="fade-up">
                  As a front-end developer, I am proficient in various
                  technologies Below <br />
                  And Various Other Libraries And Frameworks.
                </p>
              </div>
            </Col>
            <Col xxl={12}>
              <ul className="skill-list">
                {KeySkill.map((Skill, index) => (
                  <>
                    <li className={`${Skill.CName}-list`}>
                      <div className="skill-box" data-aos="flip-right">
                        {/* <span>{Skill.Icon}</span> */}
                        <Image src={Skill.Img} fluid />
                        <p>{Skill.Name}</p>
                      </div>

                      <ProgressBar
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
