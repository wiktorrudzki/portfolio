import React from "react";
import { Helmet } from "react-helmet";
import { graphql,useStaticQuery } from "gatsby";

const Seo = (props) => {
  const data = useStaticQuery(graphql`
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

  const defaults = data.site.siteMetadata;

  const image = new URL(props.image || defaults.image, defaults.siteUrl);

  return (
    <Helmet>
      <title>{props.title || defaults.title}</title>
      <meta name="description" content={props.description || defaults.description} />
      <link rel="canonical" href={new URL(props.path || '/', defaults.siteUrl)} />
      {image && <meta name="image" content={image} />}
    </Helmet>
  );
};

export default Seo;
