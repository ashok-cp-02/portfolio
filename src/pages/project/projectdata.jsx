import FKBanner from "./img/fk/banner1.png";
import FMBBanner from "./img/fmb/banner.png";
// skill
import HTMLicon from "./img/skills/html5_icon.svg";
import CSSicon from "./img/skills/css_icon.svg";
import SASSicon from "./img/skills/sass_icon.svg";
import JSicon from "./img/skills/javascript_icon.svg";
import Reacticon from "./img/skills/reactjs_icon.svg";
import Reduxicon from "./img/skills/redux_icon.svg";
import Jqueryicon from "./img/skills/jquery_icon.svg";
import Resticon from "./img/skills/restful_icon.svg";
import Booticon from "./img/skills/bootstrap-5-1.svg";
import ReactBooticon from "./img/skills/react-boot.svg";
import MUIicon from "./img/skills/material-ui-1.svg";
import GITicon from "./img/skills/git-icon.svg";
import VSCodeicon from "./img/skills/vscode.svg";
// import Sourceicon from "./img/sourcetree-1.svg";
const ProjectData = [
  {
    by: "Ashok",
    path: "Project-a",
    title: "Fusion Kitchen",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: FKBanner,
    type: "React Website",
    liveurl: "https://www.fusionkitchen.co.uk/",
    status: 1,
    date: {
      startdate: "Jan 2023",
      enddate: "Nov 2023",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon],
  },
  {
    by: "Ashok",
    path: "Project-b",
    title: "Fusion My Business",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: FMBBanner,
    type: "React Website",
    liveurl: "https://fusionmybusiness.com/",
    status: 1,
    date: {
      startdate: "Mar 2023",
      enddate: "July 2023",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon],
  },
];

export default ProjectData;
