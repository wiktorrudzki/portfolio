import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { polski, english } from "../content/NavContent";

import {
  navWrapper,
  navHeader,
  navUl,
  navHeaderH4,
  navUlLinkLi,
  navUlLink,
  link,
  navBars,
  navBarsActivated,
  navUlLinkActive,
  language,
  languages,
} from "../styles/nav.module.css";
import "../styles/dark-mode-styles/switch-mode.css";

import {
  darkestbeigeBackground,
  whitebeigeColor,
  whitebeigeBorder,
  whitebeigeBorderActive,
} from "../styles/dark-mode-styles/dark-mode.module.css";
import { SetLanguage, ThemeContext } from "./Layout.js";

const Nav = () => {
  const [hideMenu, setHideMenu] = React.useState(true);
  const [polish, setPolish] = React.useContext(SetLanguage);
  const [darkMode, setDarkMode] = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? "var(--lessblack)"
      : "white";
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  const url = window.location.href;

  //NAVIGATION STYLES

  const styles = darkMode
    ? {
        nav: `${navWrapper} ${darkestbeigeBackground}`,
        header: `${navHeader} ${whitebeigeColor}`,
        h4: `${navHeaderH4} ${whitebeigeColor}`,
        bars: `${navBars} ${whitebeigeColor}`,
        ul: hideMenu
          ? `${navUl} ${darkestbeigeBackground}`
          : `${navUl} ${navBarsActivated} ${darkestbeigeBackground}`,
        ulLink: hideMenu ? `${navUlLink} ${whitebeigeBorder}` : navUlLink,
        li: `${navUlLinkLi} ${whitebeigeColor}`,
        linkActive: whitebeigeBorderActive,
        language: language,
        languages: languages,
      }
    : {
        nav: navWrapper,
        header: navHeader,
        h4: navHeaderH4,
        bars: navBars,
        ul: hideMenu ? navUl : `${navUl} ${navBarsActivated}`,
        ulLink: navUlLink,
        li: navUlLinkLi,
        linkActive: navUlLinkActive,
        language: language,
        languages: languages,
      };

      //LANGUAGE

      const content = polish ? polski : english

  return (
    <nav className={styles.nav}>
      <Link to="/" className={link}>
        <header className={styles.header}>
          <h4 className={styles.h4}>{content.header1}</h4>
          <h4 className={styles.h4}>{content.header2}</h4>
        </header>
      </Link>
      <FontAwesomeIcon
        icon={hideMenu ? faBars : faX}
        size="1.5x"
        className={styles.bars}
        onClick={() => setHideMenu((prev) => !prev)}
      />
      <ul className={styles.ul}>
        <Link
          className={
            url.includes("about")
              ? `${styles.ulLink} ${link} ${styles.linkActive}`
              : `${styles.ulLink} ${link}`
          }
          to="/about"
        >
          <li className={styles.li}>{content.li1}</li>
        </Link>
        <Link
          className={
            url.includes("contact")
              ? `${styles.ulLink} ${link} ${styles.linkActive}`
              : `${styles.ulLink} ${link}`
          }
          to="/contact"
        >
          <li className={styles.li}>{content.li2}</li>
        </Link>
        <Link
          className={
            url.includes("CV")
              ? `${styles.ulLink} ${link} ${styles.linkActive}`
              : `${styles.ulLink} ${link}`
          }
          to="CV"
        >
          <li className={styles.li}>{content.li3}</li>
        </Link>
        <label class="switch">
          <input type="checkbox" checked={darkMode ? true : false} />
          <span
            className="slider round"
            onClick={() => setDarkMode((prev) => !prev)}
          ></span>
        </label>
        <select
          className={languages}
          onChange={() => setPolish(prev => !prev)}
        >
          <option value="polski" className={styles.language}>
            Polski
          </option>
          <option value="english" className={styles.language}>
            English
          </option>
        </select>
      </ul>
    </nav>
  );
};

export default Nav;
