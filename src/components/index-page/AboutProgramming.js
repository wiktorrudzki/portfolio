import * as React from "react";
import Demo from "../Demo";
import { StaticImage } from "gatsby-plugin-image";

import {
  aboutProgramming,
  imageWrapperAboutProgramming,
  imageContainer,
  image,
  sectionTopP,
} from "../../styles/index.module.css";

const AboutProgramming = () => {
  return (
    <section className={aboutProgramming}>
      <div className={imageWrapperAboutProgramming}>
        <div className={imageContainer}>
          <StaticImage class={image} src="../../images/ja3.jpg" />
          <Demo>
            <p className={sectionTopP}>
              Aktualnie jestem studentem 2 roku Politechniki Krakowskiej. Od
              dłuższego czasu interesuje się szeroko pojętym programowaniem, a
              od kilku miesięcy stricte "frontedem" przy użyciu technologii jaką
              jest React
            </p>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
