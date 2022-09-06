import * as React from "react";
import {
  darkStylesProjects,
  englishProjects,
  lightStylesProjects,
  polskiProjects,
} from "../../../content&styles/index-page/ProjectsC&S";
import Demo from "../../generals/Demo";
import { SetLanguage, ThemeContext } from "../../generals/Layout";
import ImageSliderGraphical from "../image-slider/ImageSliderGraphical";
import ImageSliderProgramming from "../image-slider/ImageSliderProgramming";

const Projects = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  //PROJECTS STYLES

  const styles = darkMode ? darkStylesProjects : lightStylesProjects;

  //PROJECTS LANGUAGES

  const content = polish ? polskiProjects : englishProjects;

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <Demo
            demo={styles.demo1}
            demoContainer={styles.demo1Container}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title={content.demoTitle1}
          />
          <ImageSliderGraphical styles={styles.secondImage} />
          <Demo
            demo={styles.demo2}
            demoContainer={styles.demo2Container}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title={content.demoTitle2}
          />
          <ImageSliderProgramming styles={styles.firstImage} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
