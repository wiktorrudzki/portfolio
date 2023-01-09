import { graphql, useStaticQuery } from "gatsby";

type Node = {
  id: string;
  base: string;
}

type AllProjects = {
  node: Node;
}

const AllProejcts = (): AllProjects[] => {
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
  return images.allFile.edges;
};

export default AllProejcts;
