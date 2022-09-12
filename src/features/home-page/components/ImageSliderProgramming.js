import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageSliderProgramming = ({ styles }) => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "programming" } }) {
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

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const length = pageQuery.allFile.edges.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        prev++
        if (prev === length) {
          return 0;
        } else {
          return prev++;
        }
      })
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
