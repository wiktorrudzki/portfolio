import * as React from "react";

import AboutProgramming from "./sections/AboutProgramming";
import Future from "./sections/Future";
import Projects from "./sections/Projects";
import ProjectsTitle from "./sections/ProjectsTitle";
import SectionTop from "./sections/SectionTop";

import "@styles/global.css";

const HomePage = () => {
  return (
    <>
      <SectionTop />
      <AboutProgramming />
      <ProjectsTitle />
      <Projects />
      <Future />
    </>
  );
};

export default HomePage;
