import * as React from "react";
import Layout from "../components/Layout";
import Demo from "../components/Demo";
import {
  hpWrapper,
  hpSection,
  hpSectionLeft,
  hpSectionRight,
  imgSlider,
  hpSectionLeftImage,
  hpSectionRightImage,
  hpSectionLeftH4,
  sectionTop,
  imageWrapper,
  imageContainer,
  image,
  sectionTopP,
} from "../styles/index.module.css";

import "../styles/global.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <section className={sectionTop}>
        <div className={imageWrapper}>
          <div className={imageContainer}>
            <StaticImage class={image} src="../images/ja7.jpg" />
            <Demo>
              <p className={sectionTopP}>
                Aktualnie jestem studentem 2 roku Politechniki Krakowskiej. Od
                dłuższego czasu interesuje się szeroko pojętym programowaniem, a
                od kilku miesięcy stricte "frontedem" przy użyciu technologii
                jaką jest React
              </p>
            </Demo>
          </div>
        </div>
      </section>
      {/* <main className={hpWrapper}>
        <section className={`${hpSection} ${hpSectionLeft}`}>
          <StaticImage
            src="../images/ja7.jpg"
            alt="Me looking at the sky with the amazing view"
            className={hpSectionLeftImage}
          />
          <h4 className={hpSectionLeftH4}>Aktualnie jestem studentem 2 roku Politechniki Krakowskiej{'\n'}. Od dłuższego czasu interesuje się szeroko pojętym programowaniem,{'\n'} a od kilku miesięcy stricte "frontedem" przy użyciu technologii jaką jest React</h4>
        </section>
        <section className={`${hpSection} ${hpSectionRight}`}>
          <h4>Lorem ipsum</h4>
          <h5>Lorem</h5>
          <div className={`${imgSlider} ${hpSectionRightImage}`}></div>
        </section>
      </main> */}
    </Layout>
  );
};

export default IndexPage;
