import * as React from "react";
import { useTranslation } from "react-i18next";
import { SetLanguage, ThemeContext } from "@components/Layout";
import Title from "@components/typography/Title";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import getRandomIconCSS from "../components/GetRandomIconsCSS";
import {
  darkStylesFuture,
  englishFuture,
  lightStylesFuture,
  polskiFuture,
} from "../styles/FutureC&S";

const Future = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const { t } = useTranslation();

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
        <StaticImage
          class={styles.div1Image}
          src="../../../assets/images/ja8.jpg"
        />
      </div>
      <div className={styles.div2}>
        <Title styling={styles.div2H2}>{t("future-title")}</Title>
        <p className={styles.div2P1}>{t("future-text1")}</p>
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
        <p className={styles.div2P2}>{t("future-text2")}</p>
        <ul className={styles.div2Ul}>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../assets/images/icons/globe-icon.svg"
            />
            {t("future-li1")}
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../assets/images/icons/mobile-icon.svg"
            />
            {t("future-li2")}
          </li>
          <li className={styles.div2Li}>
            <StaticImage
              className={styles.div2LiImage}
              src="../../../assets/images/icons/desktop-icon.svg"
            />
            {t("future-li3")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Future;
