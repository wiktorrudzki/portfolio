import * as React from "react";
import { useTranslation } from "react-i18next";
import { SetLanguage, ThemeContext } from "@components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

import Title from "../../../components/typography/Title";
import getRandomIconCSS from "../components/GetRandomIconsCSS";
import {
  darkStylesProjectsTitle,
  englishProjectsTitle,
  lightStylesProjectsTitle,
  polskiProjectsTitle,
} from "../styles/ProjectsTitleC&S";

const ProjectsTitle = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const {t} = useTranslation();

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

  //PROJECTS-TITLE STYLES

  const styles = darkMode ? darkStylesProjectsTitle : lightStylesProjectsTitle;

  //PROJECTS-TITLE LANGUAGES

  const content = polish ? polskiProjectsTitle : englishProjectsTitle;

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <Title styling={styles.h1}>{t("projects-title-title")}</Title>
        <p className={styles.p}>
        {t("projects-title-text")}
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
