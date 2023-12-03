// *******~ Import ~******** //
// React
// Assets

// Components
import Slider from "./components/slider/slider";
import Mint from "./components/mint/mint";
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
      <section className="home-page">
        <Slider />
        <Mint />
      </section>
    </>
  );
}
