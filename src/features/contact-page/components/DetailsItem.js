import * as React from "react";
import { Link } from "gatsby";

const DetailsItem = ({ styles, icon, content, alt, url }) => {
  return (
    <li className={styles.li}>
      <img className={styles.img} src={icon} alt={alt}></img>
      {url ? (
        <Link className={styles.link} to={url}>{content}</Link>
      ) : (
        <p>{content}</p>
      )}
    </li>
  );
};

export default DetailsItem;