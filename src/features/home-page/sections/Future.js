import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import getRandomIconCSS from "../components/GetRandomIconsCSS";
import { futureStyles } from "../styles/future";

const Future = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

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

  return (
    <section className={futureStyles[`${themeState.theme}`].section}>
      <div className={futureStyles[`${themeState.theme}`].div1}>
        <StaticImage
          class={futureStyles[`${themeState.theme}`].div1Image}
          src="../../../assets/images/me/ja8.jpg"
        />
      </div>
      <div className={futureStyles[`${themeState.theme}`].div2}>
        <Title styling={futureStyles[`${themeState.theme}`].div2H2}>
          {t("My Future Goals")}
        </Title>
        <p className={futureStyles[`${themeState.theme}`].div2P1}>
          {t("I am open to new technologies and I am experiencing them with a lot of pleasure in order to broaden my mind. Over time, I am defenitely discover many of the following")}
        </p>
        <div className={futureStyles[`${themeState.theme}`].logosWrapper}>
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
        <p className={futureStyles[`${themeState.theme}`].div2P2}>
          {t("Those technologies and libraries are definitely going to be really helpful while developing:")}
        </p>
        <ul className={futureStyles[`${themeState.theme}`].div2Ul}>
          <li className={futureStyles[`${themeState.theme}`].div2Li}>
            <StaticImage
              className={futureStyles[`${themeState.theme}`].div2LiImage}
              src="../../../assets/images/icons/globe-icon.svg"
            />
            {t("Websites")}
          </li>
          <li className={futureStyles[`${themeState.theme}`].div2Li}>
            <StaticImage
              className={futureStyles[`${themeState.theme}`].div2LiImage}
              src="../../../assets/images/icons/mobile-icon.svg"
            />
            {t("Mobile applications")}
          </li>
          <li className={futureStyles[`${themeState.theme}`].div2Li}>
            <StaticImage
              className={futureStyles[`${themeState.theme}`].div2LiImage}
              src="../../../assets/images/icons/desktop-icon.svg"
            />
            {t("Desktop applications")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Future;
