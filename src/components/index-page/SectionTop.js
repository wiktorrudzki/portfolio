import * as React from "react";
import Demo from "../Demo";
import { StaticImage } from "gatsby-plugin-image";

import {
  demoSectionTop,
  demoContainerSectionTop,
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
} from "../../styles/demo.module.css";

import {
  sectionTop,
  imageWrapper,
  imageContainer,
  image,
  sectionTopP,
} from "../../styles/index.module.css";

const SectionTop = () => {
  return (
    <section className={sectionTop}>
      <div className={imageWrapper}>
        <div className={imageContainer}>
          <StaticImage class={image} src="../images/ja7.jpg" />
          <Demo
            demo={demoSectionTop}
            demoContainer={demoContainerSectionTop}
            demoContainerHeader={demoContainerHeaderSectionTop}
            demoContainerP={demoContainerPSectionTop}
          >
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

export default SectionTop;
