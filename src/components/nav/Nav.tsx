import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@components/nav/components/Header";
import LanguageSelector from "@components/nav/components/LanguageSelector";
import ThemeSelector from "@components/nav/components/ThemeSelector";
import { navStyles } from "@components/nav/styles";
import { useRoute } from "@hooks/useRoute";
import { useTheme } from "@hooks/useTheme";
import bars from "@images/icons/bars.svg";
import barsDark from "@images/icons/bars-dark.svg";
import x from "@images/icons/x.svg";
import xDark from "@images/icons/x-dark.svg";
import { Link } from "gatsby";

import { useActiveBorder } from "./hooks";
import { useStyles } from "./hooks";

import { link } from "./styles/nav.module.css";

const Nav = () => {
  const [menu, setMenu] = useState(true);

  const { t } = useTranslation();

  const [themeState] = useTheme();

  const { currentRoute } = useRoute();

  const { navStylesDarkUl, navStylesDarkUlLink, navStylesLightUl } =
    useStyles(menu);

  //NAVIGATION STYLES

  navStyles.dark.ul = navStylesDarkUl;
  navStyles.dark.ulLink = navStylesDarkUlLink;
  navStyles.light.ul = navStylesLightUl;

  let barsIcon = themeState.theme === "light" ? bars : barsDark;
  let xIcon = themeState.theme === "light" ? x : xDark;

  return (
    <nav className={navStyles[themeState.theme].nav}>
      <Link to="/" className={link}>
        <Header />
      </Link>
      <div
        className={navStyles[themeState.theme].bars}
        onClick={() => setMenu((prev) => !prev)}
      >
        <img src={menu ? barsIcon : xIcon} width="22px" alt="icon" />
      </div>
      {/* <FontAwesomeIcon
        icon={menu ? barsIconDefinition : XIconDefinition}
        className={navStyles[themeState.theme].bars}
        onClick={() => setMenu((prev) => !prev)}
      /> */}
      <ul className={navStyles[themeState.theme].ul}>
        <Link
          className={useActiveBorder("contact", currentRoute)}
          to="/contact"
        >
          <li className={navStyles[themeState.theme].li}>{t("Contact")}</li>
        </Link>
        <Link className={useActiveBorder("CV", currentRoute)} to="/CV">
          <li className={navStyles[themeState.theme].li}>{t("CV")}</li>
        </Link>
        <ThemeSelector />
        <LanguageSelector />
      </ul>
    </nav>
  );
};

export default Nav;
