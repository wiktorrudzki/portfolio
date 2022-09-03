import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ThemeContext } from "../Layout";

import {
  sectionProjectsTitle,
  h1ProjectsTitle,
  pProjectsTitle,
  divProjectsTitle,
} from "../../styles/index.module.css";

import {
  blackBackground,
  whiteColor,
  darkbeigeColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  beigeColor,
  whitebeigeColor,
  whitebeigeBorder,
  whitebeigeBorderActive,
  lessblackBackground,
  saddlebrownColor,
  blackBorder,
  blackBorderTopBottom,
  darkenBackground
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
        section: `${sectionProjectsTitle} ${lessblackBackground} ${blackBorderTopBottom} ${darkenBackground}`,
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

  function getRandomDegree() {
    return Math.floor(Math.random() * 360);
  }

  function getRandomPercentLeft() {
    const first = Math.floor(Math.random() * 25);
    const second = Math.floor(Math.random() * 20) + 72;
    return Math.random() > 0.5 ? first : second;
  }

  function getRandomPercentTop() {
    return Math.floor(Math.random() * 75) + 5;
  }

  function logoClass() {
    return {
      width: "3%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
      left: `${getRandomPercentLeft()}%`,
      top: `${getRandomPercentTop()}%`,
      transform: `rotate(${getRandomDegree()}deg)`,
    };
  }

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
            key={logo.node.base}
            style={logoClass()}
            image={getImage(logo.node)}
          />
        );
      })}
    </section>
  );
};

export default ProjectsTitle;
