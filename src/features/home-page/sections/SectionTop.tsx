import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Demo } from "@components/demo";
import { useTheme } from "@hooks/useTheme";
import { StaticImage } from "gatsby-plugin-image";

import { sectionTopStyles } from "../styles/section-top";

const SectionTop = () => {
  const { t } = useTranslation();

  const [ themeState ] = useTheme();

  const { ref: sectionRef, inView: isSectionVisible } = useInView();

  return (
    <section
      className={
        isSectionVisible
          ? `${sectionTopStyles[themeState.theme].section} ${
              sectionTopStyles[themeState.theme].sectionAnimation
            }`
          : sectionTopStyles[themeState.theme].section
      }
      ref={sectionRef}
    >
      <div className={sectionTopStyles[themeState.theme].divWrapper}>
        <div className={sectionTopStyles[themeState.theme].divContainer}>
          <StaticImage
            className={sectionTopStyles[themeState.theme].image}
            src="../../../assets/images/me/ja-7.jpg"
            alt="me chilling on bench in the park"
          />
          <Demo
            styles={sectionTopStyles[themeState.theme]}
            title={t("Wiktor Rudzki")}
            subtitle={t("A few words about me")}
          >
            <p className={sectionTopStyles[themeState.theme].p}>
              {t(
                'Currently, I am second year Student of computer science on Cracow University of Technology. I have been interested in programming in the broadest sense for a long time and for the last few months I\'ve been strictly passionated about "frontend" using React technology'
              )}
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
