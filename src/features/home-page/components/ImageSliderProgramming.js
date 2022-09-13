import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { ProgrammingImageData } from "./queries";

const ImageSliderProgramming = ({ styles }) => {
  const pageQuery = ProgrammingImageData();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const length = pageQuery.allFile.edges.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        prev++;
        if (prev === length) {
          return 0;
        } else {
          return prev++;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <GatsbyImage
      className={styles}
      image={getImage(pageQuery.allFile.edges[currentIndex].node)}
    />
  );
};

export default ImageSliderProgramming;
