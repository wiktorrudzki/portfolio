import * as React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { SetLanguage, ThemeContext } from "@components/Layout";

import ImageSliderGraphical from "../components/ImageSliderGraphical";
import ImageSliderProgramming from "../components/ImageSliderProgramming";
import {
  darkStylesProjects,
  englishProjects,
  lightStylesProjects,
  polskiProjects,
} from "../styles/ProjectsC&S";

const Projects = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const {t} = useTranslation();

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
            title={t("projects-demo-title1")}
          />
          <ImageSliderGraphical styles={styles.secondImage} />
          <Demo
            demo={styles.demo2}
            demoContainer={styles.demo2Container}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title={t("projects-demo-title2")}
          />
          <ImageSliderProgramming styles={styles.firstImage} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
