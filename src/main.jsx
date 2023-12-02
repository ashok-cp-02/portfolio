import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./router/router";

const Main = () => {
  return (
    <>
      <Router basename="/portfolio">
        <main>
          <Routing />
        </main>
      </Router>
    </>
  );
};
export default Main;
