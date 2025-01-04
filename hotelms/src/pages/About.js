import React from "react";
import './About.css';

import Contact from "./Contact";
import Popular from "./Popular";
import Items from "./Items";
import Details from "./Details";
import AboutFooter from "./AboutFooter";
import Services from "./Services";

const About = () => {
  return (
    <div className="about">
    
    <Details />
    <Services />
    <Items />
    <Popular />
    <Contact />
    <AboutFooter />
  </div>
  );
};

export default About;
