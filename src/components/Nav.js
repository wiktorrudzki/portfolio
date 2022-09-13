import React from "react";
import { useTranslation } from "react-i18next";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";
import { Link } from "gatsby";

import { navStyles } from "./styles/nav";

import "../styles/dark-mode-styles/switch-mode.css";
import {
  link,
  navBarsActivated,
  navUl,
  navUlLink,
} from "./styles/nav/nav.module.css";
import {
  darkestbeigeBackground,
  whitebeigeBorder,
} from "@dark-mode/dark-mode.module.css";

const Nav = () => {
  const [hideMenu, setHideMenu] = React.useState(true);

  const { t } = useTranslation();

  const { themeState, themeDispatch } = useTheme();
  const { languageState, languageDispatch } = useLanguage();

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
        <header className={navStyles[`${themeState.theme}`].header}>
          <h4 className={navStyles[`${themeState.theme}`].h4}>
            {t("WIKTOR RUDZKI")}
          </h4>
          <h4 className={navStyles[`${themeState.theme}`].h4}>
            {t("FRONTEND DEVELOPER")}
          </h4>
        </header>
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
        <label class="switch">
          <input
            type="checkbox"
            checked={themeState.theme === "light" ? false : true}
          />
          <span
            className="slider round"
            onClick={() => {
              themeDispatch({
                type: "CHANGE_THEME",
                theme: themeState.theme === "light" ? "dark" : "light",
              });
            }}
          ></span>
        </label>
        <select
          onChange={(e) => {
            languageDispatch({
              type: "CHANGE_LANG",
              lang: e.target[e.target.selectedIndex].value,
            });
          }}
        >
          <option
            value="pl"
            selected={localStorage.getItem("lang") === "pl" ? true : false}
          >
            Polski
          </option>
          <option
            value="en"
            selected={localStorage.getItem("lang") === "en" ? true : false}
          >
            English
          </option>
        </select>
      </ul>
    </nav>
  );
};

export default Nav;
