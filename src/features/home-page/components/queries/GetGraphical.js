import { graphql, useStaticQuery } from "gatsby";

const GraphicalImageData = () => {
  const images = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "graphical" } }) {
          edges {
            node {
              id
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: AUTO
                  quality: 70
                )
              }
            }
          }
        }
      }
    `
  );
  return images;
};

export default GraphicalImageData;
