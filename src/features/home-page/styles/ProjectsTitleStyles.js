import {
  divProjectsTitle,
  h1ProjectsTitle,
  pProjectsTitle,
  sectionProjectsTitle,
} from "./index.module.css";
import {
  beigeColor,
  darkenBackground,
  lessblackBackground,
  whitebeigeColor,
} from "@dark-mode/dark-mode.module.css";

export const projectsTitleStyles = {
  light: {
    section: sectionProjectsTitle,
    h1: h1ProjectsTitle,
    div: divProjectsTitle,
    p: pProjectsTitle,
  },
  dark: {
    section: `${sectionProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
    h1: `${h1ProjectsTitle} ${whitebeigeColor}`,
    div: `${divProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
    p: `${pProjectsTitle} ${beigeColor}`,
  },
};
