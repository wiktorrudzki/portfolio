import * as React from "react";
import { useTranslation } from "react-i18next";
import Demo from "@components/Demo";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";
import { StaticImage } from "gatsby-plugin-image";

import {
  sectionTopStyles
} from "../styles/SectionTopC&S";

const SectionTop = () => {
  const {t} = useTranslation();

  const { themeState } = useTheme(ThemeContext);

  return (
    <section className={sectionTopStyles[`${themeState.theme}`].section}>
      <div className={sectionTopStyles[`${themeState.theme}`].divWrapper}>
        <div className={sectionTopStyles[`${themeState.theme}`].divContainer}>
          <StaticImage className={sectionTopStyles[`${themeState.theme}`].image} src="../../../assets/images/ja7.jpg" />
          <Demo
            demo={sectionTopStyles[`${themeState.theme}`].demo}
            demoContainer={sectionTopStyles[`${themeState.theme}`].demoContainer}
            demoContainerHeader={sectionTopStyles[`${themeState.theme}`].demoContainerHeader}
            demoContainerP={sectionTopStyles[`${themeState.theme}`].demoContainerP}
            title={t("section-top-title")}
            subtitle={t("section-top-subtitle")}
          >
            <p className={sectionTopStyles[`${themeState.theme}`].p}>
            {t("section-top-text")}
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
