// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
// Components
// CSS
import "./css/home.scss";
// Images
import SliderImg from "./img/slide.png";
// Icons
// SEO
import MetData from "../seo";
// *******~ Import ~******** //
export default function Home(second) {
  return (
    <>
      <MetData />

      <section className="home-page">
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
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </Col>
            <Col xxl={5} md={5}>
              <Image src={SliderImg} fluid alt="" title="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
