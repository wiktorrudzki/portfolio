import * as React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";
import { StaticImage } from "gatsby-plugin-image";

import {
  aboutProgrammingStyles,
} from "../styles/AboutProgrammingC&S";

const AboutProgramming = () => {

  const { t } = useTranslation();

  const { themeState } = useTheme(ThemeContext);

  return (
    <section className={aboutProgrammingStyles[`${themeState.theme}`].section}>
      <div className={aboutProgrammingStyles[`${themeState.theme}`].divWrapper}>
        <div className={aboutProgrammingStyles[`${themeState.theme}`].divContainer}>
          <StaticImage
            class={aboutProgrammingStyles[`${themeState.theme}`].image}
            src="../../../assets/images/ja3.jpg"
          />
          <Demo
            demo={aboutProgrammingStyles[`${themeState.theme}`].demo}
            demoContainer={aboutProgrammingStyles[`${themeState.theme}`].demoContainer}
            title={t("about-programming-title")}
            subtitle={t("about-programming-subtitle")}
          >
            <ul className={aboutProgrammingStyles[`${themeState.theme}`].ul}>
              <li>{t("about-programming-li1")}</li>
              <li>{t("about-programming-li2")}</li>
              <li>{t("about-programming-li3")}</li>
              <li>{t("about-programming-li4")}</li>
              <li>{t("about-programming-li5")}</li>
              <li>{t("about-programming-li6")}</li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
