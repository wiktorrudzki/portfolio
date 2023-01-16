import { graphql, useStaticQuery } from "gatsby";

type Node = {
  id: string;
  base: string;
}

type Logos = {
  node: Node;
}

const LogoProjectsTitle = (): Logos[] => {
  const logos = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
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
  return logos.allFile.edges;
};

export default LogoProjectsTitle;
