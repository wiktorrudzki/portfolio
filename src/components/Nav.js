import * as React from "react";
import { Link } from "gatsby";

import {
  navWrapper,
  navHeader,
  navUl,
  navHeaderH4,
  navUlLinkLi,
  navUlLink,
	link
} from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={navWrapper}>
      <Link to="/" className={link}>
        <header className={navHeader}>
          <h4 className={navHeaderH4}>WIKTOR RUDZKI</h4>
          <h4 className={navHeaderH4}>FRONTEND DEVELOPER</h4>
        </header>
      </Link>
      <ul className={navUl}>
        <Link className={navUlLink}>
          <li className={navUlLinkLi}>About</li>
        </Link>
        <Link className={navUlLink}>
          <li className={navUlLinkLi}>Contact</li>
        </Link>
        <Link className={navUlLink}>
          <li className={navUlLinkLi}>CV</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
