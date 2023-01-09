import { graphql, useStaticQuery } from "gatsby";

const SiteMetadata = () => {
  const seo = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);
  return seo;
};

export default SiteMetadata;
