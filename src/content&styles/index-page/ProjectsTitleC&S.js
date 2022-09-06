import {
  sectionProjectsTitle,
  h1ProjectsTitle,
  pProjectsTitle,
  divProjectsTitle,
} from "../../styles/index.module.css";

import {
  beigeColor,
  whitebeigeColor,
  lessblackBackground,
  darkenBackground,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

export const lightStylesProjectsTitle = {
  section: sectionProjectsTitle,
  h1: h1ProjectsTitle,
  div: divProjectsTitle,
  p: pProjectsTitle,
};

export const darkStylesProjectsTitle = {
  section: `${sectionProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
  h1: `${h1ProjectsTitle} ${whitebeigeColor}`,
  div: `${divProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
  p: `${pProjectsTitle} ${beigeColor}`,
};

export const polskiProjectsTitle = {
    h1: "Projekty",
    p: "Moje projekty dotychczas głównie polegały na szkoleniu umiejętności z różnych zakresów JavaScripta oraz Reacta poznając coraz to nowe ich możliwości podczas pisania prostych gier webowych, aplikacji oraz algorytmów."
}

export const englishProjectsTitle = {
    h1: "Projects",
    p: "My projects so far, were mostly about acquiring some new skills from various scopes of JavaScript and React learning more and more about their potential while writing simple web games, applications and alorithms"
}
