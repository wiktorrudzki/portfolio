import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { LogoProjectsTitle } from "@features/home-page/queries";
import { useTheme } from "@hooks/useTheme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import getRandomIconCSS from "../components/GetRandomIconsCSS";
import { projectsTitleStyles } from "../styles/projects-title";

const ProjectsTitle = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  const logos = LogoProjectsTitle();

  return (
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
      {logos.map(({ node }) => (
        <GatsbyImage
          title={node.base}
          key={node.base}
          style={getRandomIconCSS("3%", "between")}
          image={getImage(node)}
        />
      ))}
    </section>
  );
};

export default ProjectsTitle;
