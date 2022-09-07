import * as React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { SetLanguage, ThemeContext } from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import {
  darkStylesAboutProgramming,
  englishAboutProgramming,
  lightStylesAboutProgramming,
  polskiAboutProgramming,
} from "../styles/AboutProgrammingC&S";

const AboutProgramming = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const {t} = useTranslation();

  //ABOUT-PROGRAMMING STYLES

  const styles = darkMode
    ? darkStylesAboutProgramming
    : lightStylesAboutProgramming;

    //ABOUT-PROGRAMING LANGUAGE

    const content = polish ? polskiAboutProgramming : englishAboutProgramming;

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <StaticImage class={styles.image} src="../../../assets/images/ja3.jpg" />
          <Demo
            demo={styles.demo}
            demoContainer={styles.demoContainer}
            title={t("about-programming-title")}
            subtitle={t("about-programming-subtitle")}
          >
            <ul className={styles.ul}>
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
