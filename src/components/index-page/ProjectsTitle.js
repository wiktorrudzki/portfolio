import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ThemeContext } from "../Layout";
import getRandomIconCSS from "./GetRandomIconsCSS";

import {
  sectionProjectsTitle,
  h1ProjectsTitle,
  pProjectsTitle,
  divProjectsTitle,
} from "../../styles/index.module.css";

import {
  beigeColor,
  whitebeigeColor,
  lessblackBackground,
  darkenBackground,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

const ProjectsTitle = () => {
  const [darkMode] = React.useContext(ThemeContext);

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

  //PROJECT-TITLE STYLES

  const styles = darkMode
    ? {
        section: `${sectionProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
        h1: `${h1ProjectsTitle} ${whitebeigeColor}`,
        div: `${divProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
        p: `${pProjectsTitle} ${beigeColor}`,
      }
    : {
        section: sectionProjectsTitle,
        h1: h1ProjectsTitle,
        div: divProjectsTitle,
        p: pProjectsTitle,
      };

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h1 className={styles.h1}>Projekty</h1>
        <p className={styles.p}>
          Moje projekty dotychczas głównie polegały na szkoleniu umiejętności z
          różnych zakresów JavaScripta oraz Reacta poznając coraz to nowe ich
          możliwości podczas pisania prostych gier webowych, aplikacji oraz
          algorytmów.
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
