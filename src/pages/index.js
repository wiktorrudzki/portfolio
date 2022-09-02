import * as React from "react";
import Layout from "../components/Layout";

import "../styles/global.css";

import SectionTop from "../components/index-page/SectionTop";
import AboutProgramming from "../components/index-page/AboutProgramming";
import Projects from "../components/index-page/Projects";
import ProjectsTitle from "../components/index-page/ProjectsTitle";

const IndexPage = () => {
  return (
    <Layout>
      <SectionTop />
      <AboutProgramming />
      <ProjectsTitle />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
