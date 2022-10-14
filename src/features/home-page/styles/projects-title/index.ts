import {
  divProjectsTitle,
  h1ProjectsTitle,
  logo,
  logoAnimation,
  logoDiv,
  pProjectsTitle,
  sectionProjectsTitle,
} from "./projects-title.module.css";
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
    logoDiv: logoDiv,
    logo: logo,
    logoAnimation: logoAnimation,
  },
  dark: {
    section: `${sectionProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
    h1: `${h1ProjectsTitle} ${whitebeigeColor}`,
    div: `${divProjectsTitle} ${lessblackBackground} ${darkenBackground}`,
    p: `${pProjectsTitle} ${beigeColor}`,
    logoDiv: logoDiv,
    logo: logo,
    logoAnimation: logoAnimation,
  },
};
