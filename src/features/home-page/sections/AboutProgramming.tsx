import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Demo } from "@components/demo";
import { useTheme } from "@hooks/useTheme";
import { StaticImage } from "gatsby-plugin-image";

import { aboutProgrammingStyles } from "../styles/about-programming";

const AboutProgramming = () => {
  const { t } = useTranslation();

  const [themeState] = useTheme();

  const { ref: listItemRef, inView: isListItemVisible } = useInView();

  const classForListItemVisibility = isListItemVisible
    ? `${aboutProgrammingStyles[themeState.theme].listItemAnimation} ${
        aboutProgrammingStyles[themeState.theme].listItem
      }`
    : aboutProgrammingStyles[themeState.theme].listItem;

  return (
    <section className={aboutProgrammingStyles[themeState.theme].section}>
      <div className={aboutProgrammingStyles[themeState.theme].divWrapper}>
        <div className={aboutProgrammingStyles[themeState.theme].divContainer}>
          <StaticImage
            class={aboutProgrammingStyles[themeState.theme].image}
            src="../../../assets/images/me/ja-3.jpg"
            alt="me watching lake with my friend"
          />
          <Demo
            styles={aboutProgrammingStyles[themeState.theme]}
            title={t("My Technologies")}
            subtitle={t("Technologies and languages that I had a contact with")}
          >
            <ul className={aboutProgrammingStyles[themeState.theme].ul}>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "0.2s" }}
              >
                {t("React")}
              </li>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "0.6s" }}
              >
                {t("Gatsby and Next.js")}
              </li>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "1s" }}
              >
                {t("JavaScript ES6")}
              </li>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "1.4s" }}
              >
                {t("Node.js - Express.js")}
              </li>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "1.8s" }}
              >
                {t("Sass (SCSS)")}
              </li>
              <li
                ref={listItemRef}
                className={classForListItemVisibility}
                style={{ animationDelay: "2.2s" }}
              >
                {t("TypeScript")}
              </li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
