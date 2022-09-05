import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import getRandomIconCSS from "./GetRandomIconsCSS";
import { ThemeContext } from "../Layout";
import { graphql, useStaticQuery } from "gatsby";

import {
  sectionFuture,
  div1Future,
  div1ImageFuture,
  div2Future,
  div2H2Future,
  div2P1Future,
  div2P2Future,
  logosWrapperFuture,
  div2UlFuture,
  div2LiFuture,
  div2LiImageFuture,
} from "../../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  beigeColor,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

const Future = () => {
  const [darkMode] = React.useContext(ThemeContext);

  const pageQuery = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "logoFuture" } }) {
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

  //FUTURE STYLES

  const styles = darkMode
    ? {
        section: `${sectionFuture} ${darkestbeigeBackground}`,
        div1: div1Future,
        div1Image: div1ImageFuture,
        div2: `${div2Future} ${moredarkbeigeBackground}`,
        div2H2: `${div2H2Future} ${whiteColor}`,
        div2P1: `${div2P1Future} ${beigeColor}`,
        div2P2: `${div2P2Future} ${beigeColor}`,
        logosWrapper: logosWrapperFuture,
        div2Ul: div2UlFuture,
        div2Li: `${div2LiFuture} ${whiteColor}`,
        div2LiImage: div2LiImageFuture,
      }
    : {
        section: sectionFuture,
        div1: div1Future,
        div1Image: div1ImageFuture,
        div2: div2Future,
        div2H2: div2H2Future,
        div2P1: div2P1Future,
        div2P2: div2P2Future,
        logosWrapper: logosWrapperFuture,
        div2Ul: div2UlFuture,
        div2Li: div2LiFuture,
        div2LiImage: div2LiImageFuture,
      };

  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <StaticImage class={styles.div1Image} src="../../images/ja8.jpg" />
      </div>
      <div className={styles.div2}>
        <h2 className={styles.div2H2}>Moje Przyszłe Cele</h2>
        <p className={styles.div2P1}>
          Jestem otwarty na nowe technoologie i z chęcią je poznaję w celu
          nieustannego poszerzania swoich horyzontów. Z czasem na pewno będę
          poznawał wiele z poniższych.
        </p>
        <div className={styles.logosWrapper}>
          {logos.map((logo) => {
            return (
              <GatsbyImage
                title={logo.node.base}
                key={logo.node.base}
                style={getRandomIconCSS("8%")}
                image={getImage(logo.node)}
              />
            );
          })}
        </div>
        <p className={styles.div2P2}>
          Owe technologie oraz biblioteki z pewnością przydadzą się przy
          rozwijaniu umiejętności z zakresu tworzenia:
        </p>
        <ul className={styles.div2Ul}>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../images/icons/globe-icon.svg"
            />
            Stron internetowych
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../images/icons/mobile-icon.svg"
            />
            Aplikacji mobilnych
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../images/icons/desktop-icon.svg"
            />
            <p>Aplikacji desktopowych</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Future;
