import {
  projects,
  projectsContainer,
  projectsFirstImage,
  projectsSecondImage,
  projectsWrapper,
} from "./index.module.css";
import {
  blackBorder,
  darkestbeigeBackground,
  lessblackBackground,
  moredarkbeigeBackground,
  saddlebrownColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";
import {
  demo1ContainerProjects,
  demo1Projects,
  demo2ContainerProjects,
  demo2Projects,
  demoContainerHeaderProjects,
} from "@styles/demo.module.css";

export const projectsStyles = {
  dark: {
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