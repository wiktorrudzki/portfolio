import * as React from "react";
import Demo from "../Demo";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "../Layout";

import {
  demoSectionTop,
  demoContainerSectionTop,
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
} from "../../styles/demo.module.css";

import {
  sectionTop,
  imageWrapper,
  imageContainer,
  image,
  sectionTopP,
} from "../../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  whitebeigeColor,
  lessblackBackground
} from "../../styles/dark-mode-styles/dark-mode.module.css";

const SectionTop = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //SECTION-TOP STYLES

  const styles = darkMode
    ? {
        section: `${sectionTop} ${lessblackBackground}`,
        divWrapper: `${imageWrapper} ${moredarkbeigeBackground}`,
        divContainer: imageContainer,
        image: image,
        demo: `${demoSectionTop} ${darkestbeigeBackground}`,
        demoContainer: demoContainerSectionTop,
        demoContainerHeader: `${demoContainerHeaderSectionTop} ${whiteColor}`,
        demoContainerP: `${demoContainerPSectionTop} ${whiteColor}`,
        p: `${sectionTopP} ${whitebeigeColor}`,
      }
    : {
        section: sectionTop,
        divWrapper: imageWrapper,
        divContainer: imageContainer,
        image: image,
        demo: demoSectionTop,
        demoContainer: demoContainerSectionTop,
        demoContainerHeader: demoContainerHeaderSectionTop,
        demoContainerP: demoContainerPSectionTop,
        p: sectionTopP,
      };

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <StaticImage className={styles.image} src="../../images/ja7.jpg" />
          <Demo
            demo={styles.demo}
            demoContainer={styles.demoContainer}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title="Wiktor Rudzki"
            subtitle="Kilka słów o mnie"
          >
            <p className={styles.p}>
              Aktualnie jestem studentem 2 roku Politechniki Krakowskiej. Od
              dłuższego czasu interesuje się szeroko pojętym programowaniem, a
              od kilku miesięcy stricte "frontedem" przy użyciu technologii jaką
              jest React
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
