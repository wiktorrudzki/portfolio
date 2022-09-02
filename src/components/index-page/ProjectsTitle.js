import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ThemeContext } from "../Layout";

import {
  sectionProjectsTitle,
  h1ProjectsTitle,
  pProjectsTitle,
  logoProjectsTitle,
  logo0,
  logo1,
  logo2,
  logo3,
  logo4,
} from "../../styles/index.module.css";

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
        section: sectionProjectsTitle,
        h1: h1ProjectsTitle,
        p: pProjectsTitle,
        logo0: `${logoProjectsTitle} ${logo0}`,
        logo1: `${logoProjectsTitle} ${logo1}`,
        logo2: `${logoProjectsTitle} ${logo2}`,
        logo3: `${logoProjectsTitle} ${logo3}`,
        logo4: `${logoProjectsTitle} ${logo4}`,
      }
    : {
        section: sectionProjectsTitle,
        h1: h1ProjectsTitle,
        p: pProjectsTitle,
        logo0: `${logoProjectsTitle} ${logo0}`,
        logo1: `${logoProjectsTitle} ${logo1}`,
        logo2: `${logoProjectsTitle} ${logo2}`,
        logo3: `${logoProjectsTitle} ${logo3}`,
        logo4: `${logoProjectsTitle} ${logo4}`,
      };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Projekty</h1>
      <p className={styles.p}>
        Moje projekty dotychczas głównie polegały na szkoleniu umiejętności z
        różnych zakresów JavaScripta oraz Reacta poznając coraz to nowe ich
        możliwości podczas pisania prostych gier webowych, aplikacji oraz algorytmów.
      </p>
      {logos.map((logo, index) => {
        return (
          <GatsbyImage className={index === 0 ? styles.logo0 : index === 1 ? styles.logo1 : index === 2 ? styles.logo2 : index === 3 ? styles.logo3 : styles.logo4} image={getImage(logo.node)} />
        );
      })}
    </section>
  );
};

export default ProjectsTitle;
