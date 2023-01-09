import React from "react";
import { Link } from "gatsby";

type Props = {
  url: string;
  style: string;
  icon: string | undefined;
  alt: string;
}

const IconLink: React.FC<Props> = ({ url, style, icon, alt }) => (
  <Link to={url} target="_blank" rel="noopener noreferrer">
    <li>
      <img className={style} src={icon} alt={alt} />
    </li>
  </Link>
);

export default IconLink;
