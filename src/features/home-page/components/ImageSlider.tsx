import React, { useRef, useState } from "react";
import { AllProjects } from "@features/home-page/queries";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import projectsInfo from "./info";
import { imageSliderStyles } from "./styles";

const ImageSlider = () => {
  const infoRef = useRef<HTMLParagraphElement | null>(null);
  const slideInfoRef = useRef<HTMLDivElement | null>(null);
  const slidePhotoRef = useRef<HTMLDivElement | null>(null);

  const [themeState] = useTheme();
  const { languageState } = useLanguage();

  const pageQuery = AllProjects().sort((a, b) => {
    return a.node.base < b.node.base ? -1 : 1;
  });

  const [index, setIndex] = useState(0);

  const showSlideInfo = () => {
    if (!slideInfoRef.current) return;

    slideInfoRef.current.style.opacity = "1";
    slidePhotoRef.current.style.filter = "brightness(0.75)";
  };

  const hideSlideInfo = () => {
    if (!slideInfoRef.current) return;

    slideInfoRef.current.style.opacity = "0";
    slidePhotoRef.current.style.filter = "brightness(1)";
  };

  const showInfo = (e: any) => {
    if (!infoRef.current || window.innerWidth > 786) return;

    if (e.target.className.includes("arrow")) return;

    if (infoRef.current.style.opacity === "1") {
      slidePhotoRef.current.style.filter = "brightness(1)";
      infoRef.current.style.opacity = "0";
    } else {
      infoRef.current.style.opacity = "1";
      slidePhotoRef.current.style.filter = "brightness(0.75)";
    }
  };

  return (
    <div
      onMouseEnter={() => showSlideInfo()}
      onMouseLeave={() => hideSlideInfo()}
      className={imageSliderStyles[themeState.theme].slideShow}
    >
      <div
        ref={slidePhotoRef}
        className={imageSliderStyles[themeState.theme].slideShowSlider}
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {pageQuery.map((element, index) => {
          return (
            <GatsbyImage
              key={index}
              imgClassName={imageSliderStyles[themeState.theme].slideImg}
              image={getImage(element.node)}
              alt="one of my projects"
            />
          );
        })}
      </div>
      <div
        ref={slideInfoRef}
        onClick={(e) => showInfo(e)}
        className={imageSliderStyles[themeState.theme].slideInfo}
      >
        <div
          onClick={() =>
            setIndex((prev) => (prev === 0 ? pageQuery.length - 1 : --prev))
          }
          className={imageSliderStyles[themeState.theme].leftArrow}
        ></div>
        <p ref={infoRef}>{projectsInfo[index][languageState.lang]}</p>
        <div
          onClick={() =>
            setIndex((prev) => (prev === pageQuery.length - 1 ? 0 : ++prev))
          }
          className={imageSliderStyles[themeState.theme].rightArrow}
        ></div>
      </div>
      <ul className={imageSliderStyles[themeState.theme].switchSlideList}>
        {pageQuery.map((element, i) => (
          <li
            key={i}
            onClick={() => setIndex(i)}
            className={`${imageSliderStyles[themeState.theme].switchSlideBtn} ${
              index === i ? imageSliderStyles[themeState.theme].currentBtn : ""
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
