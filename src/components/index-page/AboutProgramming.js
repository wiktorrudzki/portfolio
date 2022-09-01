import * as React from "react";
import Demo from "../Demo";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "../Layout";

import {
  demoAboutProgramming,
  demoContainerAboutProgramming,
} from "../../styles/demo.module.css";

import {
  aboutProgramming,
  imageWrapperAboutProgramming,
  imageContainerAboutProgramming,
  imageAboutProgramming,
  aboutProgrammingP,
} from "../../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  whitebeigeColor,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

const AboutProgramming = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //ABOUT-PROGRAMMING STYLES

  const styles = darkMode ? {
    section: `${aboutProgramming} ${darkestbeigeBackground}`,
    divWrapper: imageWrapperAboutProgramming,
    divContainer: imageContainerAboutProgramming,
    image: imageAboutProgramming,
    demo: `${demoAboutProgramming} ${moredarkbeigeBackground}`,
    demoContainer: `${demoContainerAboutProgramming} ${whiteColor}`,
    ul: `${aboutProgrammingP} ${whitebeigeColor}`
  } : {
    section: aboutProgramming,
    divWrapper: imageWrapperAboutProgramming,
    divContainer: imageContainerAboutProgramming,
    image: imageAboutProgramming,
    demo: demoAboutProgramming,
    demoContainer: demoContainerAboutProgramming,
    ul: aboutProgrammingP
  }

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <StaticImage
            class={styles.image}
            src="../../images/ja3.jpg"
          />
          <Demo
            demo={styles.demo}
            demoContainer={styles.demoContainer}
            title="Moje Technologie"
            subtitle="Technologie oraz języki, z którymi miałem styczność"
          >
            <ul className={styles.ul}>
              <li>React</li>
              <li>Gatsby</li>
              <li>JavaScript ES6</li>
              <li>node JS</li>
              <li>Podstawy c++, c#</li>
              <li>Podstawy python</li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
