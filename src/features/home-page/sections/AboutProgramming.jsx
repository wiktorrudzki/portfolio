import React from "react";
import { useTranslation } from "react-i18next";
import { Demo } from "@components/demo";
import { useTheme } from "@hooks/useTheme";
import { StaticImage } from "gatsby-plugin-image";

import { aboutProgrammingStyles } from "../styles/about-programming";

const AboutProgramming = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  return (
    <section className={aboutProgrammingStyles[themeState.theme].section}>
      <div className={aboutProgrammingStyles[themeState.theme].divWrapper}>
        <div
          className={aboutProgrammingStyles[themeState.theme].divContainer}
        >
          <StaticImage
            class={aboutProgrammingStyles[themeState.theme].image}
            src="../../../assets/images/me/ja-3.jpg"
          />
          <Demo
            demo={aboutProgrammingStyles[themeState.theme].demo}
            demoContainer={
              aboutProgrammingStyles[themeState.theme].demoContainer
            }
            title={t("My Technologies")}
            subtitle={t("Technologies and languages that I had a contact with")}
          >
            <ul className={aboutProgrammingStyles[themeState.theme].ul}>
              <li>{t("React")}</li>
              <li>{t("Gatsby")}</li>
              <li>{t("JavaScript ES6")}</li>
              <li>{t("Node JS")}</li>
              <li>{t("Basics of c++, c#")}</li>
              <li>{t("Basics of python")}</li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
