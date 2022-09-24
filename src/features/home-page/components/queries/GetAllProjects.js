import { graphql, useStaticQuery } from "gatsby";

const AllProejcts = () => {
  const images = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "all" } }) {
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

export default AllProejcts;
