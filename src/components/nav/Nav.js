import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { navStyles } from "@components-styles/nav";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@hooks/useTheme";
import { Link } from "gatsby";

import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

import {
  link,
  navBarsActivated,
  navUl,
  navUlLink,
} from "@components-styles/nav/nav.module.css";
import {
  darkestbeigeBackground,
  whitebeigeBorder,
} from "@dark-mode/dark-mode.module.css";

const Nav = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const { t } = useTranslation();

  const { themeState } = useTheme();

  const url = window.location.href;

  //NAVIGATION STYLES

  navStyles.dark.ul = hideMenu
    ? `${navUl} ${darkestbeigeBackground}`
    : `${navUl} ${navBarsActivated} ${darkestbeigeBackground}`;

  navStyles.dark.ulLink = hideMenu
    ? `${navUlLink} ${whitebeigeBorder}`
    : navUlLink;

  navStyles.light.ul = hideMenu ? navUl : `${navUl} ${navBarsActivated}`;

  return (
    <nav className={navStyles[`${themeState.theme}`].nav}>
      <Link to="/" className={link}>
        <Header />
      </Link>
      <FontAwesomeIcon
        icon={hideMenu ? faBars : faX}
        size="1.5x"
        className={navStyles[`${themeState.theme}`].bars}
        onClick={() => setHideMenu((prev) => !prev)}
      />
      <ul className={navStyles[`${themeState.theme}`].ul}>
        <Link
          className={
            url.includes("about")
              ? `${navStyles[`${themeState.theme}`].ulLink} ${link} ${
                  navStyles[`${themeState.theme}`].linkActive
                }`
              : `${navStyles[`${themeState.theme}`].ulLink} ${link}`
          }
          to="/about"
        >
          <li className={navStyles[`${themeState.theme}`].li}>
            {t("About")}
          </li>
        </Link>
        <Link
          className={
            url.includes("contact")
              ? `${navStyles[`${themeState.theme}`].ulLink} ${link} ${
                  navStyles[`${themeState.theme}`].linkActive
                }`
              : `${navStyles[`${themeState.theme}`].ulLink} ${link}`
          }
          to="/contact"
        >
          <li className={navStyles[`${themeState.theme}`].li}>
            {t("Contact")}
          </li>
        </Link>
        <Link
          className={
            url.includes("CV")
              ? `${navStyles[`${themeState.theme}`].ulLink} ${link} ${
                  navStyles[`${themeState.theme}`].linkActive
                }`
              : `${navStyles[`${themeState.theme}`].ulLink} ${link}`
          }
          to="/CV"
        >
          <li className={navStyles[`${themeState.theme}`].li}>
            {t("CV")}
          </li>
        </Link>
        <ThemeSelector />
        <LanguageSelector />
      </ul>
    </nav>
  );
};

export default Nav;
