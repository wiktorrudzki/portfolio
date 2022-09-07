import * as React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { SetLanguage, ThemeContext } from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import {
  darkStylesSectionTop,
  englishSectionTop,
  lightStylesSectionTop,
  polskiSectionTop,
} from "../styles/SectionTopC&S";

const SectionTop = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const {t} = useTranslation();

  //SECTION-TOP STYLES

  const styles = darkMode ? darkStylesSectionTop : lightStylesSectionTop;

  //SECTION-TOP LANGUAGE

  const content = polish ? polskiSectionTop : englishSectionTop;

  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.divContainer}>
          <StaticImage className={styles.image} src="../../../assets/images/ja7.jpg" />
          <Demo
            demo={styles.demo}
            demoContainer={styles.demoContainer}
            demoContainerHeader={styles.demoContainerHeader}
            demoContainerP={styles.demoContainerP}
            title={t("section-top-title")}
            subtitle={t("section-top-subtitle")}
          >
            <p className={styles.p}>
            {t("section-top-text")}
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
