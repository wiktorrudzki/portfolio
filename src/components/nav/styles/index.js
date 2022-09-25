import { selector, option } from "./language-selector.module.css";

import {
  whitebeigeBorder2px,
  whitebeigeBorderActive,
  whitebeigeColor,
  darkestbeigeBackground,
} from "@styles/dark-mode-styles/dark-mode.module.css";

import {
  navBars,
  navHeader,
  navHeaderH4,
  navUlLink,
  navUlLinkActive,
  navUlLinkLi,
  navWrapper,
} from "./nav.module.css";

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

export const languageSelectorStyles = {
  dark: {
    selector: `${selector} ${whitebeigeColor} ${whitebeigeBorder2px} ${darkestbeigeBackground}`,
    option: `${option} ${whitebeigeColor} ${darkestbeigeBackground}`,
  },
  light: {
    selector: selector,
    option: option,
  },
};
