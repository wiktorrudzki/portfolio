import * as React from "react";
import { useTranslation } from "react-i18next";
import { SetLanguage, ThemeContext } from "@components/Layout.js";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  darkStylesNav,
  englishNav,
  lightStylesNav,
  polskiNav,
} from "@styles/NavC&S";
import { Link } from "gatsby";

import "../styles/dark-mode-styles/switch-mode.css";
import {
  darkestbeigeBackground,
  whitebeigeBorder,
} from "@dark-mode/dark-mode.module.css";
import {
  link,
  navBarsActivated,
  navUl,
  navUlLink,
} from "@styles/nav.module.css";

const Nav = () => {
  const [hideMenu, setHideMenu] = React.useState(true);
  const [polish, setPolish] = React.useContext(SetLanguage);
  const [darkMode, setDarkMode] = React.useContext(ThemeContext);

  const {t} = useTranslation();

  //BODY DARK AND LIGHT MODE

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
        ul: hideMenu
          ? `${navUl} ${darkestbeigeBackground}`
          : `${navUl} ${navBarsActivated} ${darkestbeigeBackground}`,
        ulLink: hideMenu ? `${navUlLink} ${whitebeigeBorder}` : navUlLink,
        ...darkStylesNav,
      }
    : {
        ul: hideMenu ? navUl : `${navUl} ${navBarsActivated}`,
        ...lightStylesNav,
      };

  //LANGUAGE

  const content = polish ? polskiNav : englishNav;

  return (
    <nav className={styles.nav}>
      <Link to="/" className={link}>
        <header className={styles.header}>
          <h4 className={styles.h4}>{t("nav-title1")}</h4>
          <h4 className={styles.h4}>{t("nav-title2")}</h4>
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
          <li className={styles.li}>{t("nav-li1")}</li>
        </Link>
        <Link
          className={
            url.includes("contact")
              ? `${styles.ulLink} ${link} ${styles.linkActive}`
              : `${styles.ulLink} ${link}`
          }
          to="/contact"
        >
          <li className={styles.li}>{t("nav-li2")}</li>
        </Link>
        <Link
          className={
            url.includes("CV")
              ? `${styles.ulLink} ${link} ${styles.linkActive}`
              : `${styles.ulLink} ${link}`
          }
          to="CV"
        >
          <li className={styles.li}>{t("nav-li3")}</li>
        </Link>
        <label class="switch">
          <input type="checkbox" checked={darkMode ? true : false} />
          <span
            className="slider round"
            onClick={() => setDarkMode((prev) => !prev)}
          ></span>
        </label>
        <select
          className={styles.languages}
          onChange={() => setPolish((prev) => !prev)}
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
