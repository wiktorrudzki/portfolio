import * as React from "react";
import Demo from "../Demo";
import { ThemeContext } from "../Layout";
import ImageSliderGraphical from "./image-slider/ImageSliderGraphical";
import ImageSliderProgramming from "./image-slider/ImageSliderProgramming";

import {
  demo1Projects,
  demo2Projects,
  demo1ContainerProjects,
  demo2ContainerProjects,
  demoContainerHeaderProjects,
} from "../../styles/demo.module.css";

import {
  projects,
  projectsWrapper,
  projectsContainer,
  projectsFirstImage,
  projectsSecondImage,
} from "../../styles/index.module.css";

import {
  blackBackground,
  whiteColor,
  darkbeigeColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  beigeColor,
  whitebeigeColor,
  whitebeigeBorder,
  whitebeigeBorderActive,
  lessblackBackground,
  saddlebrownColor,
  blackBorder,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

const Projects = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //PROJECT STYLES

  const styles = darkMode
    ? {
        section: `${projects} ${lessblackBackground}`,
        divWrapper: `${projectsWrapper} ${moredarkbeigeBackground}`,
        divContainer: projectsContainer,
        firstImage: projectsFirstImage,
        secondImage: projectsSecondImage,
        demo1: `${demo1Projects} ${darkestbeigeBackground} ${blackBorder}`,
        demo2: `${demo2Projects} ${darkestbeigeBackground} ${blackBorder}`,
        demo1Container: demo1ContainerProjects,
        demo2Container: demo2ContainerProjects,
        demoContainerHeader: `${demoContainerHeaderProjects} ${whiteColor}`,
        demoContainerP: whiteColor,
      }
    : {
        section: projects,
        divWrapper: projectsWrapper,
        divContainer: projectsContainer,
        firstImage: projectsFirstImage,
        secondImage: projectsSecondImage,
        demo1: demo1Projects,
        demo2: demo2Projects,
        demo1Container: demo1ContainerProjects,
        demo2Container: demo2ContainerProjects,
        demoContainerHeader: `${demoContainerHeaderProjects} ${saddlebrownColor}`,
        demoContainerP: saddlebrownColor,
      };

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <Demo
            demo={styles.demo1}
            demoContainer={styles.demo1Container}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title="Projekty Graficzne"
          />
          <ImageSliderGraphical
            styles={styles.secondImage}
          />
          <Demo
            demo={styles.demo2}
            demoContainer={styles.demo2Container}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title="Projekty Kodowane"
          />
          <ImageSliderProgramming
            styles={styles.firstImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
