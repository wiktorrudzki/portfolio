import {
  demo1ContainerProjects,
  demo1Projects,
  demo2ContainerProjects,
  demo2Projects,
  demoContainerHeaderProjects,
  projects,
  projectsContainer,
  projectsFirstImage,
  projectsSecondImage,
  projectsWrapper,
} from "./projects.module.css";
import {
  darkestbeigeBackground,
  lessblackBackground,
  moredarkbeigeBackground,
  saddlebrownColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const projectsStyles = {
  dark: {
    section: `${projects} ${lessblackBackground}`,
    divWrapper: `${projectsWrapper} ${moredarkbeigeBackground}`,
    divContainer: projectsContainer,
    firstImage: projectsFirstImage,
    secondImage: projectsSecondImage,
    demo1: `${demo1Projects} ${darkestbeigeBackground}`,
    demo2: `${demo2Projects} ${darkestbeigeBackground}`,
    demo1Container: demo1ContainerProjects,
    demo2Container: demo2ContainerProjects,
    demoContainerHeader: `${demoContainerHeaderProjects} ${whiteColor}`,
    demoContainerP: whiteColor,
  },
  light: {
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
  },
};
