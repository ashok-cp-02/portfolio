// *******~ Import ~******** //
//? React
import { useContext } from "react";
//? Assets
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
//? Components
import Social from "../home/components/social";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
//? CSS
import "./contact.scss";
//? Images
// import Photo from "./img/Ashok.jpg";
import Photo from "./img/ashok1.jpg";

//? JSON File

//? Icons
import { FaChevronLeft } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { VscCallIncoming } from "react-icons/vsc";
import { CiCalendar } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";
// *******~ Import ~******** //

function Contact({ Contactshow, setContactshow }) {
  const handleClose = () => setContactshow(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Offcanvas
        show={Contactshow}
        onHide={handleClose}
        placement="end"
        className={`contact-canva ${theme === "dark" && "dark-theme"}`}
      >
        <Offcanvas.Body>
          <span className="back-btn" onClick={handleClose}>
            <FaChevronLeft />
          </span>

          <div className="content">
            <div className="heading">
              <Image src={Photo} fluid />
              <h3>Ashok C</h3>
              <p>Front End Developer</p>
              <Social />
            </div>
            <div className="details">
              <ul>
                <li>
                  <span>
                    <IoMailOutline />
                  </span>
                  <a href="mailto:ashokashok7117@gmail.com">
                    ashokashok7117@gmail.com
                  </a>
                </li>
                <li>
                  <span>
                    <VscCallIncoming />
                  </span>
                  <a href="tel:8754711743">+91 87547 11743</a>
                </li>
                <li>
                  <span>
                    <CiCalendar />
                  </span>
                  10 June 1997
                </li>
                <li>
                  <span>
                    <SlGraduation />
                  </span>
                  B.Sc.Computer Science.,
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Contact;
