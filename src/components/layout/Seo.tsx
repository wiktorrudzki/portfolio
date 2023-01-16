import React from "react";
import { Helmet } from "react-helmet";

import { SiteMetadata } from "../queries";

type Props = {
  title?: string | undefined;
  description?: string | undefined;
  path?: string | undefined;
  imageProps: string;
  props?: any;
}

const Seo: React.FC<Props> = ({ title, description, path, imageProps }) => {
  const data = SiteMetadata();

  const defaults = data.site.siteMetadata;

  const image = (new URL(imageProps || defaults.image, defaults.siteUrl)).toString();

  return (
    <Helmet>
      <title>{title || defaults.title}</title>
      <meta name="description" content={description || defaults.description} />
      <link rel="canonical" href={(new URL(path || "/", defaults.siteUrl).toString())} />
      {image && <meta name="image" content={image} />}
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </Helmet>
  );
};

export default Seo;
