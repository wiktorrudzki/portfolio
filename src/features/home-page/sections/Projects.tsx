import React from "react";
import { useTheme } from "@hooks/useTheme";

import ImageSlider from "../components/ImageSlider";
import { projectsStyles } from "../styles/projects";

import "react-slideshow-image/dist/styles.css";

const Projects = () => {
  const [ themeState ] = useTheme();

  return (
    <section className={projectsStyles[themeState.theme].section}>
      <div className={projectsStyles[themeState.theme].divWrapper}>
        <div className={projectsStyles[themeState.theme].divContainer}>
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
