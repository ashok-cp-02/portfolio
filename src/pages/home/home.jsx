// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
// Components
// CSS
// Images
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
          <Row>
            <Col xxl={12}>
              <h1 className="text-center">Ashok C</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
