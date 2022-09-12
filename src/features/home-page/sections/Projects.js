import React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";

import ImageSliderGraphical from "../components/ImageSliderGraphical";
import ImageSliderProgramming from "../components/ImageSliderProgramming";
import { projectsStyles } from "../styles/projects";

const Projects = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme(ThemeContext);

  return (
    <section className={projectsStyles[`${themeState.theme}`].section}>
      <div className={projectsStyles[`${themeState.theme}`].divWrapper}>
        <div className={projectsStyles[`${themeState.theme}`].divContainer}>
          <Demo
            demo={projectsStyles[`${themeState.theme}`].demo1}
            demoContainer={projectsStyles[`${themeState.theme}`].demo1Container}
            demoContainerHeader={
              projectsStyles[`${themeState.theme}`].demoContainerHeader
            }
            demoContainerP={
              projectsStyles[`${themeState.theme}`].demoContainerP
            }
            title={t("Graphical Projects")}
          />
          <ImageSliderGraphical
            styles={projectsStyles[`${themeState.theme}`].secondImage}
          />
          <Demo
            demo={projectsStyles[`${themeState.theme}`].demo2}
            demoContainer={projectsStyles[`${themeState.theme}`].demo2Container}
            demoContainerHeader={
              projectsStyles[`${themeState.theme}`].demoContainerHeader
            }
            demoContainerP={
              projectsStyles[`${themeState.theme}`].demoContainerP
            }
            title={t("Coded Projects")}
          />
          <ImageSliderProgramming
            styles={projectsStyles[`${themeState.theme}`].firstImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
