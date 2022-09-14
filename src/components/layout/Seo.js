import React from "react";
import { Helmet } from "react-helmet";

import { SiteMetadata } from "../queries"

const Seo = (props) => {
  const data = SiteMetadata();

  const defaults = data.site.siteMetadata;

  const image = new URL(props.image || defaults.image, defaults.siteUrl);

  return (
    <Helmet>
      <title>{props.title || defaults.title}</title>
      <meta name="description" content={props.description || defaults.description} />
      <link rel="canonical" href={new URL(props.path || '/', defaults.siteUrl)} />
      {image && <meta name="image" content={image} />}
      <script src="https://www.google.com/recaptcha/api.js" async defer></script> 
    </Helmet>
  );
};

export default Seo;
