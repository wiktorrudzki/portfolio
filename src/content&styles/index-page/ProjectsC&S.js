import {
  demo1Projects,
  demo2Projects,
  demo1ContainerProjects,
  demo2ContainerProjects,
  demoContainerHeaderProjects,
} from "../../styles/demo.module.css";

import {
  projects,
  projectsWrapper,
  projectsContainer,
  projectsFirstImage,
  projectsSecondImage,
} from "../../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  lessblackBackground,
  saddlebrownColor,
  blackBorder,
} from "../../styles/dark-mode-styles/dark-mode.module.css";

export const lightStylesProjects = {
  section: projects,
  divWrapper: projectsWrapper,
  divContainer: projectsContainer,
  firstImage: projectsFirstImage,
  secondImage: projectsSecondImage,
  demo1: demo1Projects,
  demo2: demo2Projects,
  demo1Container: demo1ContainerProjects,
  demo2Container: demo2ContainerProjects,
  demoContainerHeader: `${demoContainerHeaderProjects} ${saddlebrownColor}`,
  demoContainerP: saddlebrownColor,
};

export const darkStylesProjects = {
  section: `${projects} ${lessblackBackground}`,
  divWrapper: `${projectsWrapper} ${moredarkbeigeBackground}`,
  divContainer: projectsContainer,
  firstImage: projectsFirstImage,
  secondImage: projectsSecondImage,
  demo1: `${demo1Projects} ${darkestbeigeBackground} ${blackBorder}`,
  demo2: `${demo2Projects} ${darkestbeigeBackground} ${blackBorder}`,
  demo1Container: demo1ContainerProjects,
  demo2Container: demo2ContainerProjects,
  demoContainerHeader: `${demoContainerHeaderProjects} ${whiteColor}`,
  demoContainerP: whiteColor,
};

export const polskiProjects = {
  demoTitle1: "Projekty Graficzne",
  demoTitle2: "Projekty Kodowane",
};

export const englishProjects = {
  demoTitle1: "Graphical Projects",
  demoTitle2: "Coded Projects",
};
