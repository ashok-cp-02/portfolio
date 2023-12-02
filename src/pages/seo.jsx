import React from "react";
import { Helmet } from "react-helmet";

export default function MetData() {
  return (
    <Helmet>
      <title>
        Ashok C | UI Developer | Front-End Developer | React Developer
      </title>
      <meta
        name="description"
        content="Ashok C | UI Developer | Front-End Developer | React Developer"
      />
      <meta
        name="keywords"
        content="Ashok C | UI Developer | Front-End Developer | React Developer"
      />
      <meta name="author" content="Ashok C" />
      <link rel="canonical" href="https://ashok-cp-02.github.io/portfolio/" />

      <meta
        property="og:title"
        content="Ashok C | UI Developer | Front-End Developer | React Developer"
      />
      <meta
        property="og:url"
        content="https://ashok-cp-02.github.io/portfolio/"
      />
      <meta http-equiv="content-language" content="en" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ashok C | Portfolio" />
      <meta
        property="og:description"
        content="Ashok C | UI Developer | Front-End Developer | React Developer"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Ashok C | Portfolio" />
      <meta name="twitter:creator" content="Ashok C" />
      <meta
        name="twitter:domain"
        content="https://ashok-cp-02.github.io/portfolio/"
      />
    </Helmet>
  );
}
