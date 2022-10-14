import { graphql, useStaticQuery } from "gatsby";

const LogoFuture = () => {
    const logos = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "logoFuture" } }) {
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
}

export default LogoFuture;
