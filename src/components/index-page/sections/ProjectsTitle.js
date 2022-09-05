import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SetLanguage, ThemeContext } from "../../generals/Layout";
import getRandomIconCSS from "../GetRandomIconsCSS";
import {
  darkStylesProjectsTitle,
  englishProjectsTitle,
  lightStylesProjectsTitle,
  polskiProjectsTitle,
} from "../../../content&styles/ProjectsTitleC&S";

const ProjectsTitle = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

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
        <h1 className={styles.h1}>{content.h1}</h1>
        <p className={styles.p}>
          {content.p}
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
