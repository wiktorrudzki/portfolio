import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import {
  navWrapper,
  navHeader,
  navUl,
  navHeaderH4,
  navUlLinkLi,
  navUlLink,
	link,
	navBars,
	navBarsActivated
} from "../styles/nav.module.css";

const Nav = () => {

	const [hideMenu, setHideMenu] = React.useState(true)

  return (
    <nav className={navWrapper}>
      <Link to="/" className={link}>
        <header className={navHeader}>
          <h4 className={navHeaderH4}>WIKTOR RUDZKI</h4>
          <h4 className={navHeaderH4}>FRONTEND DEVELOPER</h4>
        </header>
      </Link>
			<FontAwesomeIcon icon={hideMenu ? faBars : faX} size="1.5x" className={navBars} onClick={() => setHideMenu(prev => !prev)}/>
      <ul className={hideMenu ? navUl : `${navUl} ${navBarsActivated}`}>
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
