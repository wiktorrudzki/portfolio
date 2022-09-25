import { graphql, useStaticQuery } from "gatsby";

const LogoProjectsTitle = () => {
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
