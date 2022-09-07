import * as React from 'react';
import { Link } from 'gatsby';

const IconLink = ({ url, style, icon, alt }) => {
    return (
        <Link to={url} target="_blank">
          <li>
            <img
              className={style}
              src={icon}
              alt={alt}
            />
          </li>
        </Link>
    )
}

export default IconLink;
