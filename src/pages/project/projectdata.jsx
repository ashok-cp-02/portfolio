import FKBanner from "./img/fk/banner2.png";
import FMBBanner from "./img/fmb/banner.png";
import FIBanner from "./img/fi/banner.png";
import FPOSBanner from "./img/fpos/banner.png";
import resta1Banner from "./img/resta1.png";
import resta2Banner from "./img/resta2.png";
import takeaway1Banner from "./img/takeaway1.png";
import RestaBanner03 from "./img/restaurant3.png";
import RestaBanner04 from "./img/resta4.jpg";
import EposBanner from "./img/eposbanner.png";
import NewBanner from "./img/neowep.png";
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
// import VSCodeicon from "./img/skills/vscode.svg";
// import Sourceicon from "./img/sourcetree-1.svg";
const ProjectData = [
  {
    by: "Ashok",
    path: "project-fk",
    title: "Fusion Kitchen Website",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: FKBanner,
    type: "React Website",
    liveurl: "https://www.fusionkitchen.co.uk/",
    status: 1,
    date: {
      startdate: "Jan 2023",
      enddate: "Nov 2023",
    },
    tech: [
      Reacticon,
      HTMLicon,
      CSSicon,
      SASSicon,
      Reduxicon,
      MUIicon,
      ReactBooticon,
      Resticon,
    ],
  },
  {
    by: "Ashok",
    path: "project-restaurant-template-01",
    title: "Restaurant Template 01",
    disc: "UK Based restaurant template, Signle page website. This Page contain default header footer section. And animated meal deal section",
    banner: resta1Banner,
    type: "React Website",
    liveurl: "https://fusionbooking.co.uk/restaurant_v1/",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon, ReactBooticon, GITicon],
  },
  {
    by: "Ashok",
    path: "project-takeaway-template-01",
    title: "Takeaway Template 01",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: takeaway1Banner,
    type: "React Website",
    liveurl: "https://fusionbooking.co.uk/takeaway_v1/",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon, ReactBooticon],
  },
  {
    by: "Ashok",
    path: "project-restaurant-template-02",
    title: "Restaurant Template 02",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: resta2Banner,
    type: "HTML Website",
    liveurl: "https://www.indobitesrestaurant.co.uk/",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [HTMLicon, CSSicon, JSicon, Booticon, Jqueryicon],
  },
  {
    by: "Ashok",
    path: "project-fmb",
    title: "Fusion My Business Website",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: FMBBanner,
    type: "React Website",
    liveurl: "https://fusionmybusiness.com/",
    status: 1,
    date: {
      startdate: "July 2023",
      enddate: "July 2023",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon, MUIicon, ReactBooticon],
  },
  {
    by: "Ashok",
    path: "project-restaurant-template-03",
    title: "Restaurant Template 03",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: RestaBanner03,
    type: "HTML Website",
    liveurl: "https://www.fusion3.co.uk/bath-sushi/index.html",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [HTMLicon, CSSicon, JSicon, Booticon, Jqueryicon],
  },
  {
    by: "Ashok",
    path: "project-fi",
    title: "Fusion Innovative Website",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: FIBanner,
    type: "React Website",
    liveurl: "https://fusioninnovative.com/",
    status: 1,
    date: {
      startdate: "Dec 2022",
      enddate: "Feb 2023",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon, MUIicon, ReactBooticon],
  },

  {
    by: "Ashok",
    path: "project-restaurant-template-04",
    title: "Restaurant Template 04",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: RestaBanner04,
    type: "HTML Website",
    liveurl: "https://www.fusion3.co.uk/lupulo/halloween.html",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [HTMLicon, CSSicon, JSicon, Booticon, Jqueryicon],
  },
  {
    by: "Ashok",
    path: "project-fpos",
    title: "FusionPOS Website",
    disc: "",
    banner: FPOSBanner,
    type: "HTML Website",
    liveurl: "https://www.fusionpos.co.uk/",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [Reacticon, HTMLicon, CSSicon, SASSicon, MUIicon, ReactBooticon],
  },

  {
    by: "Ashok",
    path: "project-zreport",
    title: "Z Report UI",
    disc: "",
    banner: EposBanner,
    type: "HTML Website",
    liveurl: "https://fusionbooking.co.uk/z-report-update/takeaway.html",
    status: 1,
    date: {
      startdate: "-",
      enddate: "-",
    },
    tech: [HTMLicon, CSSicon, JSicon, Booticon, Jqueryicon],
  },
  {
    by: "Ashok",
    path: "project-neowep",
    title: "Neowep Website",
    disc: "This app enables users to easily order food by searching for nearby restaurants using their postal code. You can choose between options for either picking up your order or having it delivered to your location.",
    banner: NewBanner,
    type: "HTML Website",
    liveurl: "https://neowep.com/",
    status: 1,
    date: {
      startdate: "-",
      enddate: "Oct 2021",
    },
    tech: [HTMLicon, CSSicon, JSicon, Booticon, Jqueryicon],
  },
];

export default ProjectData;
