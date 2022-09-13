import { graphql, useStaticQuery } from "gatsby";

const ProgrammingImageData = () => {
  const images = useStaticQuery(graphql`
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
  return images;
};

export default ProgrammingImageData;
