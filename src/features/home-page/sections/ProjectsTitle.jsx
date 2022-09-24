import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import getRandomIconCSS from "../components/GetRandomIconsCSS";
import { projectsTitleStyles } from "../styles/projects-title";

const ProjectsTitle = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  const pageQuery = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 70)
            }
          }
        }
      }
    }
  `);

  const logos = pageQuery.allFile.edges;

  return (
    <section className={projectsTitleStyles[themeState.theme].section}>
      <div className={projectsTitleStyles[themeState.theme].div}>
        <Title styling={projectsTitleStyles[themeState.theme].h1}>
          {t("Projects")}
        </Title>
        <p className={projectsTitleStyles[themeState.theme].p}>
          {t("My projects so far, were mostly about acquiring some new skills from various scopes of JavaScript and React learning more and more about their potential while writing simple web games, applications and alorithms")}
        </p>
      </div>
      {logos.map((logo) => {
        return (
          <GatsbyImage
            title={logo.node.base}
            key={logo.node.base}
            style={getRandomIconCSS("3%", "between")}
            image={getImage(logo.node)}
          />
        );
      })}
    </section>
  );
};

export default ProjectsTitle;
