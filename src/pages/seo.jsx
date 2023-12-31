import React from "react";
import { Helmet } from "react-helmet";

export default function MetData() {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Ashok C | Sr. UI Developer | React Developer</title>
      <meta
        name="title"
        content="Ashok C | Sr. UI Developer | React Developer"
      />
      <meta
        name="description"
        content="Crazy Senior UI Developer Who Wants to Explore Every Tech Staks. Having Over 5 Years Of Experience In Building Web Applications With A Responsive Layout Using HTML5, CSS3, JavaScript, React.Js, JQuery, SASS, Bootstrap and Various Other Libraries And Frameworks."
      />
      <meta
        name="keywords"
        content="Ashok C,Sr. UI Developer,React Developer,Front-End Developer, Ashok UI Developer"
      />
      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Ashok C | Portfolio" />
      <meta
        property="og:url"
        content="https://ashok-cp-02.github.io/portfolio/"
      />
      <meta
        property="og:title"
        content="Ashok C | Sr. UI Developer | React Developer"
      />
      <meta
        property="og:description"
        content="Crazy Senior UI Developer Who Wants to Explore Every Tech Staks. Having Over 5 Years Of Experience In Building Web Applications With A Responsive Layout Using HTML5, CSS3, JavaScript, React.Js, JQuery, SASS, Bootstrap and Various Other Libraries And Frameworks."
      />
      <meta
        property="og:image"
        content="https://ashok-cp-02.github.io/portfolio/name-logo2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://ashok-cp-02.github.io/portfolio/"
      />
      <meta
        property="twitter:title"
        content="Ashok C | Sr. UI Developer | React Developer"
      />
      <meta
        property="twitter:description"
        content="Crazy Senior UI Developer Who Wants to Explore Every Tech Staks. Having Over 5 Years Of Experience In Building Web Applications With A Responsive Layout Using HTML5, CSS3, JavaScript, React.Js, JQuery, SASS, Bootstrap and Various Other Libraries And Frameworks."
      />
      <meta
        property="twitter:image"
        content="https://ashok-cp-02.github.io/portfolio/name-logo2.png"
      />
      <meta name="twitter:site" content="Ashok C | Portfolio" />
      <meta name="twitter:creator" content="Ashok C | Sr. UI Developer" />
      <meta
        name="twitter:domain"
        content="https://ashok-cp-02.github.io/portfolio/"
      />
      {/* Other meta */}
      <meta name="author" content="Ashok C | Sr. UI Developer" />
      <link rel="canonical" href="https://ashok-cp-02.github.io/portfolio/" />
      <meta http-equiv="content-language" content="en" />
      <meta name="publisher" content="Ashok C | Sr. UI Developer"></meta>
    </Helmet>
  );
}
