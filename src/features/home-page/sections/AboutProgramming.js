import * as React from "react";
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
            title={content.demoTitle}
            subtitle={content.demoSubtitle}
          >
            <ul className={styles.ul}>
              <li>{content.li1}</li>
              <li>{content.li2}</li>
              <li>{content.li3}</li>
              <li>{content.li4}</li>
              <li>{content.li5}</li>
              <li>{content.li6}</li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
