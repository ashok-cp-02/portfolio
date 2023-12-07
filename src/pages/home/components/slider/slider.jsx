// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
//? Components
import myResumePDF from "../../../../common/assets/ASHOK-RESUME.pdf";
import Contact from "../../../contact/contact";
// CSS
import "./slider.scss";
// Images
import SliderImg from "./img/slide.png";

//? JSON File

//? Icons
import { GrDocumentUser } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";
import { MdOutlineContacts } from "react-icons/md";

// *******~ Import ~******** //

const Slider = () => {
  const [Contactshow, setContactshow] = useState(false);

  const ContacthandleShow = () => setContactshow(true);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myResumePDF;
    link.download = "ashok-resume.pdf";
    link.click();
  };
  return (
    <>
      <span id="home"></span>
      <section className="slider">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xxl={6} md={7}>
              <span className="sub-title">WELCOME TO MY WORLD</span>
              <h1>
                Hi, I’m Ashok C <br />a{" "}
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "Front End Developer",
                        "UI Developer",
                        "React Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p>
                "Having over 5 years of experience in building web applications
                with a responsive layout using
                <span>HTML5, CSS3, JavaScript, React.js, SASS, Bootstrap </span>
                and various other libraries and frameworks."
              </p>

              <div className="btn-grp">
                <button onClick={ContacthandleShow}>
                  <MdOutlineContacts />
                  Contact Me
                </button>
                <button onClick={handleDownload}>
                  <GrDocumentDownload /> Resume
                </button>
              </div>
              <ul>
                <li>
                  <a className="git" href="#">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    {" "}
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a className="mail" href="#">
                    <IoMdMail />
                  </a>
                </li>
                <li>
                  <a className="profile" href="#">
                    {" "}
                    <GrDocumentUser />
                  </a>
                </li>
              </ul>
            </Col>
            <Col xxl={5} md={5}>
              <Image src={SliderImg} fluid alt="" title="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default Slider;
