import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Title } from "@components/typography";
import { logoClass } from "@features/home-page/components";
import { LogoProjectsTitle } from "@features/home-page/queries";
import { useTheme } from "@hooks/useTheme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { projectsTitleStyles } from "../styles/projects-title";

const ProjectsTitle = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  const logos = LogoProjectsTitle();

  const { ref: logoRef, inView: isLogoVisible } = useInView();

  let delay = 0;

  return (
    <>
      <section className={projectsTitleStyles[themeState.theme].section}>
        <div className={projectsTitleStyles[themeState.theme].div}>
          <Title styling={projectsTitleStyles[themeState.theme].h1}>
            {t("Projects")}
          </Title>
          <p className={projectsTitleStyles[themeState.theme].p}>
            {t(
              "My projects so far, were mostly about acquiring some new skills from various scopes of JavaScript and React learning more and more about their potential while writing simple web games, applications and alorithms"
            )}
          </p>
        </div>
        {logos.map(({ node, index }) => {
          delay += 0.35;
          return (
            <div
            key={node.base}
              className={
                isLogoVisible
                  ? `${projectsTitleStyles[themeState.theme].logoAnimation} ${
                      projectsTitleStyles[themeState.theme].logo
                    } `
                  : projectsTitleStyles[themeState.theme].logo
              }
              style={logoClass("3%", "between", delay)}
              ref={logoRef}
            >
              <GatsbyImage
                title={node.base}
                key={node.base}
                image={getImage(node)}
                alt="logo"
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProjectsTitle;
