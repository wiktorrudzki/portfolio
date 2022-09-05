import * as React from "react";
import Demo from "../../generals/Demo";
import { StaticImage } from "gatsby-plugin-image";
import { SetLanguage, ThemeContext } from "../../generals/Layout";

import {
  darkStylesSectionTop,
  englishSectionTop,
  lightStylesSectionTop,
  polskiSectionTop,
} from "../../../content&styles/SectionTopC&S";

const SectionTop = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  //SECTION-TOP STYLES

  const styles = darkMode ? darkStylesSectionTop : lightStylesSectionTop;

  //SECTION-TOP LANGUAGE

  const content = polish ? polskiSectionTop : englishSectionTop;

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <StaticImage className={styles.image} src="../../../images/ja7.jpg" />
          <Demo
            demo={styles.demo}
            demoContainer={styles.demoContainer}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title={content.demoTitle}
            subtitle={content.demoSubtitle}
          >
            <p className={styles.p}>
              {content.p}
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
