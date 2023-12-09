// *******~ Import ~******** //
// React
// Assets

// Components
import Slider from "./components/slider/slider";
import Mint from "./components/mint/mint";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
// CSS
import "./css/home.scss";
// Images

// Icons
// SEO
import MetData from "../seo";

// *******~ Import ~******** //
export default function Home(second) {
  return (
    <>
      <MetData />
      <span id="home"></span>
      <section className="home-page">
        <Slider />
        <About />
        <Skills />
        {/* <Mint /> */}
      </section>
    </>
  );
}
