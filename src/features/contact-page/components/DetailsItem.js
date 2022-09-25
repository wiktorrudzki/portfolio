import React from "react";
import { Link } from "gatsby";

const DetailsItem = ({ styles, icon, content, alt, url }) => (
  <li className={styles.li}>
    <img className={styles.img} src={icon} alt={alt} />
    {url ? (
      <Link
        className={styles.link}
        to={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    ) : (
      <p>{content}</p>
    )}
  </li>
);

export default DetailsItem;
