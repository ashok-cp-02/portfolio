// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutLottie from "./img/slide.json";
//? Components
import Contact from "../../../contact/contact";
//? CSS
import "./about.scss";
//? Images

//? JSON File

//? Icons
// import { FaHtml5 } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdOutlineContacts } from "react-icons/md";

// *******~ Import ~******** //

const About = () => {
  const [Contactshow, setContactshow] = useState(false);

  const ContacthandleShow = () => setContactshow(true);
  const AboutContent = [
    "I have over 5 years of experience in UI Development, with expertise in HTML, CSS, SASS, JavaScript, Bootstrap, and various other libraries and frameworks.",
    "I have past 2 years of experience in React JS, a popular JavaScript library. I have utilized NPM along with React Bootstrap, Material UI, React Router Dom, Sass, React Icons, and other related technologies.",
    "I possess a keen eye for detail and have the ability to translate wireframes and design concepts into pixel-perfect creations. I excel in developing highly interactive user interfaces for web applications, ensuring responsive layouts.",
    "Ensured cross-browser compatibility and responsiveness using media queries and flexbox/grid layouts.",
    "Managed codebase efficiently using Git and GitHub for version control.",
  ];
  return (
    <>
      <span id="about"></span>
      <section className="about-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xxl={5} md={8} lg={5}>
              <div className="lottie-ani" data-aos="fade-up">
                <Player autoplay loop src={AboutLottie}></Player>
              </div>
            </Col>
            <Col xxl={7} md={12} lg={7}>
              <div className="heading">
                <h2 data-aos="fade-up">About Me</h2>
                <p data-aos="fade-up">
                  “Crazy <span>Senior UI Developer</span> Who Wants to Explore
                  Every Tech Staks”
                </p>
              </div>
              <ul>
                {AboutContent.map((data, index) => (
                  <>
                    <li key={index} data-aos="fade-up">
                      <VscDebugBreakpointLog /> <p>{data}</p>
                    </li>
                  </>
                ))}
              </ul>
              <button onClick={ContacthandleShow}>
                <MdOutlineContacts />
                Contact Me
              </button>
              {/* <div className="icons-div">
                <ul>
                  <li>
                    <FaHtml5 />
                    HTML
                  </li>
                </ul>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default About;
