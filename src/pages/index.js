import * as React from "react";
import Layout from "../components/generals/Layout";

import "../styles/global.css";

import SectionTop from "../components/index-page/sections/SectionTop";
import AboutProgramming from "../components/index-page/sections/AboutProgramming";
import Projects from "../components/index-page/sections/Projects";
import ProjectsTitle from "../components/index-page/sections/ProjectsTitle";
import Future from "../components/index-page/sections/Future";

const IndexPage = () => {
  return (
    <Layout>
      <SectionTop />
      <AboutProgramming />
      <ProjectsTitle />
      <Projects />
      <Future />
    </Layout>
  );
};

export default IndexPage;
