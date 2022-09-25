import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { FutureListItem } from "@features/home-page/components";
import { logoClass } from "@features/home-page/components";
import { LogoFuture } from "@features/home-page/queries";
import { useTheme } from "@hooks/useTheme";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { futureStyles } from "../styles/future";

const Future = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  const logos = LogoFuture();

  return (
    <section className={futureStyles[themeState.theme].section}>
      <div className={futureStyles[themeState.theme].div1}>
        <StaticImage
          class={futureStyles[themeState.theme].div1Image}
          src="../../../assets/images/me/ja-8.jpg"
        />
      </div>
      <div className={futureStyles[themeState.theme].div2}>
        <Title styling={futureStyles[themeState.theme].div2H2}>
          {t("My Future Goals")}
        </Title>
        <p className={futureStyles[themeState.theme].div2P1}>
          {t(
            "I am open to new technologies and I am experiencing them with a lot of pleasure in order to broaden my mind. Over time, I am defenitely discover many of the following"
          )}
        </p>
        <div className={futureStyles[themeState.theme].logosWrapper}>
          {logos.map((logo) => {
            return (
              <GatsbyImage
                title={logo.node.base}
                key={logo.node.base}
                style={logoClass("8%")}
                image={getImage(logo.node)}
              />
            );
          })}
        </div>
        <p className={futureStyles[themeState.theme].div2P2}>
          {t(
            "Those technologies and libraries are definitely going to be really helpful while developing:"
          )}
        </p>
        <ul className={futureStyles[themeState.theme].div2Ul}>
          <FutureListItem>
            <StaticImage
              className={futureStyles[themeState.theme].div2LiImage}
              src="../../../assets/images/futureIcons/globe-icon.svg"
            />
            {t("Websites")}
          </FutureListItem>
          <FutureListItem>
            <StaticImage
              className={futureStyles[themeState.theme].div2LiImage}
              src="../../../assets/images/futureIcons/mobile-icon.svg"
            />
            {t("Mobile applications")}
          </FutureListItem>
          <FutureListItem>
            <StaticImage
              className={futureStyles[themeState.theme].div2LiImage}
              src="../../../assets/images/futureIcons/desktop-icon.svg"
            />
            {t("Desktop applications")}
          </FutureListItem>
        </ul>
      </div>
    </section>
  );
};

export default Future;
