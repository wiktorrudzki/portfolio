import {
  darkestbeigeBackground,
  whitebeigeBorderActive,
  whitebeigeColor,
} from "./dark-mode-styles/dark-mode.module.css";
import {
  navBars,
  navHeader,
  navHeaderH4,
  navUlLink,
  navUlLinkActive,
  navUlLinkLi,
  navWrapper,
} from "@styles/nav.module.css";

export const navStyles = {
  dark: {
    nav: `${navWrapper} ${darkestbeigeBackground}`,
    header: `${navHeader} ${whitebeigeColor}`,
    h4: `${navHeaderH4} ${whitebeigeColor}`,
    bars: `${navBars} ${whitebeigeColor}`,
    li: `${navUlLinkLi} ${whitebeigeColor}`,
    linkActive: whitebeigeBorderActive,
  },
  light: {
    nav: navWrapper,
    header: navHeader,
    h4: navHeaderH4,
    bars: navBars,
    ulLink: navUlLink,
    li: navUlLinkLi,
    linkActive: navUlLinkActive,
  },
};

export const darkStylesNav = {
  nav: `${navWrapper} ${darkestbeigeBackground}`,
  header: `${navHeader} ${whitebeigeColor}`,
  h4: `${navHeaderH4} ${whitebeigeColor}`,
  bars: `${navBars} ${whitebeigeColor}`,
  li: `${navUlLinkLi} ${whitebeigeColor}`,
  linkActive: whitebeigeBorderActive,
};

export const lightStylesNav = {
  nav: navWrapper,
  header: navHeader,
  h4: navHeaderH4,
  bars: navBars,
  ulLink: navUlLink,
  li: navUlLinkLi,
  linkActive: navUlLinkActive,
};

export const polskiNav = {
  header1: "WIKTOR RUDZKI",
  header2: "FRONTEND DEVELOPER",
  li1: "O mnie",
  li2: "Kontakt",
  li3: "CV",
};

export const englishNav = {
  header1: "WIKTOR RUDZKI",
  header2: "FRONTEND DEVELOPER",
  li1: "About",
  li2: "Contact",
  li3: "CV",
};
