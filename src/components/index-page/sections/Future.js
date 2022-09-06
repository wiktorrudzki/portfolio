import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import getRandomIconCSS from "../GetRandomIconsCSS";
import { ThemeContext, SetLanguage } from "../../generals/Layout";
import { graphql, useStaticQuery } from "gatsby";
import {
  darkStylesFuture,
  englishFuture,
  lightStylesFuture,
  polskiFuture,
} from "../../../content&styles/index-page/FutureC&S";

const Future = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

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

  const styles = darkMode ? darkStylesFuture : lightStylesFuture;

  //FUTURE LANGUAGES

  const content = polish ? polskiFuture : englishFuture;

  return (
    <section className={styles.section}>
      <div className={styles.div1}>
        <StaticImage class={styles.div1Image} src="../../../images/ja8.jpg" />
      </div>
      <div className={styles.div2}>
        <h2 className={styles.div2H2}>{content.header}</h2>
        <p className={styles.div2P1}>{content.headerP1}</p>
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
        <p className={styles.div2P2}>{content.headerP2}</p>
        <ul className={styles.div2Ul}>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../images/icons/globe-icon.svg"
            />
            {content.li1}
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../images/icons/mobile-icon.svg"
            />
            {content.li2}
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../images/icons/desktop-icon.svg"
            />
            <p>{content.li3}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Future;
