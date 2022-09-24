import React from "react";
import { Link } from "gatsby";

const IconLink = ({ url, style, icon, alt }) => (
  <Link to={url} target="_blank" rel="noopener noreferrer">
    <li>
      <img className={style} src={icon} alt={alt} />
    </li>
  </Link>
);

export default IconLink;
