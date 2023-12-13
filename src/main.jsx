// *******~ Import ~******** //
//? React
import React, { useContext, useEffect } from "react";
//? Assets
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//? Components
import ThemeContext from "./common/theme/components/contexts/themecontexts";
import Routing from "./router/router";
import GoTop from "./common/gototop/gototop";
import ScrollToTop from "./common/scrolltop/scrolltop";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
//? CSS

//? Images
import CircleImg from "./common/assets/img/gradient-circle.svg";
//? JSON File

//? Icons

// *******~ Import ~******** //

const Main = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0d0620";
    } else {
      document.body.style.backgroundColor = "#fff";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme]);

  return (
    <>
      <Router basename="/portfolio">
        {theme === "dark" && (
          <div className="gradient-position">
            {[...Array(2)].map((data, index) => (
              <>
                <img src={CircleImg} width="500" alt="Background Circle" />
              </>
            ))}
          </div>
        )}

        <GoTop />
        <ScrollToTop />
        <Header />
        <main className="ashok-portfolio">
          <Routing />
        </main>
        <Footer />
      </Router>
    </>
  );
};
export default Main;
