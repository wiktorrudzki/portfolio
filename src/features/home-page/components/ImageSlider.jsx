import React, { useState } from "react";
import { AllProjects } from "@features/home-page/queries";
import { useTheme } from "@hooks/useTheme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { imageSliderStyles } from "./styles";

const ImageSlider = () => {
  const { themeState } = useTheme();

  const [ firstRender, setFirstRender ] = useState(true);

  const pageQuery = AllProjects();

  const [index, setIndex] = React.useState(0);

  const delay = 3500;

  if (firstRender) {
    setInterval(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pageQuery.allFile.edges.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    setFirstRender(false);
  }

  return (
    <div className={imageSliderStyles[themeState.theme].slideShow}>
      <div
        className={imageSliderStyles[themeState.theme].slideShowSlider}
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {pageQuery.allFile.edges.map((element, index) => {
          return (
            <GatsbyImage
              key={index}
              imgClassName={imageSliderStyles[themeState.theme].slideImg}
              objectFit="contain"
              objectPosition="50% 50%"
              image={getImage(element.node)}
              className={imageSliderStyles[themeState.theme].slide}
              alt="one of my projects"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
