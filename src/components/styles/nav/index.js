import {
  navBars,
  navHeader,
  navHeaderH4,
  navUlLink,
  navUlLinkActive,
  navUlLinkLi,
  navWrapper,
} from "./nav.module.css";
import {
  darkestbeigeBackground,
  whitebeigeBorderActive,
  whitebeigeColor,
} from "@styles/dark-mode-styles/dark-mode.module.css";

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
