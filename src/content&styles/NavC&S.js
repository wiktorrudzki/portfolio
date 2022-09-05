import {
  navWrapper,
  navHeader,
  navHeaderH4,
  navUlLinkLi,
  navUlLink,
  navBars,
  navUlLinkActive,
  language,
  languages,
} from "../styles/nav.module.css";

import {
  darkestbeigeBackground,
  whitebeigeColor,
  whitebeigeBorderActive,
} from "../styles/dark-mode-styles/dark-mode.module.css";

export const darkStyles = {
    nav: `${navWrapper} ${darkestbeigeBackground}`,
    header: `${navHeader} ${whitebeigeColor}`,
    h4: `${navHeaderH4} ${whitebeigeColor}`,
    bars: `${navBars} ${whitebeigeColor}`,
    li: `${navUlLinkLi} ${whitebeigeColor}`,
    linkActive: whitebeigeBorderActive,
    language: language,
    languages: languages,
}

export const lightStyles = {
  nav: navWrapper,
        header: navHeader,
        h4: navHeaderH4,
        bars: navBars,
        ulLink: navUlLink,
        li: navUlLinkLi,
        linkActive: navUlLinkActive,
        language: language,
        languages: languages,
}

export const polski = {
  header1: "WIKTOR RUDZKI",
  header2: "FRONTEND DEVELOPER",
  li1: "O Mnie",
  li2: "Kontakt",
  li3: "CV",
};

export const english = {
  header1: "WIKTOR RUDZKI",
  header2: "FRONTEND DEVELOPER",
  li1: "About",
  li2: "Contact",
  li3: "CV",
};
