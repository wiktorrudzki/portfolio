import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { GraphicalImageData } from "./queries";

const ImageSliderGraphical = ({ styles }) => {
  const pageQuery = GraphicalImageData();

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
    }, 6000);

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

export default ImageSliderGraphical;
