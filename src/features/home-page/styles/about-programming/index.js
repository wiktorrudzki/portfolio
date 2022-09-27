import {
  aboutProgramming,
  aboutProgrammingListItem,
  aboutProgrammingListItemAnimation,
  aboutProgrammingP,
  demoAboutProgramming,
  demoContainerAboutProgramming,
  imageAboutProgramming,
  imageContainerAboutProgramming,
  imageWrapperAboutProgramming,
} from "./about-programming.module.css";
import {
  darkestbeigeBackground,
  moredarkbeigeBackground,
  whitebeigeColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const aboutProgrammingStyles = {
  dark: {
    section: `${aboutProgramming} ${darkestbeigeBackground}`,
    divWrapper: imageWrapperAboutProgramming,
    divContainer: imageContainerAboutProgramming,
    image: imageAboutProgramming,
    demo: `${demoAboutProgramming} ${moredarkbeigeBackground}`,
    listItem: aboutProgrammingListItem,
    listItemAnimation: aboutProgrammingListItemAnimation,
    demoContainer: `${demoContainerAboutProgramming} ${whiteColor}`,
    ul: `${aboutProgrammingP} ${whitebeigeColor}`,
  },
  light: {
    section: aboutProgramming,
    divWrapper: imageWrapperAboutProgramming,
    divContainer: imageContainerAboutProgramming,
    image: imageAboutProgramming,
    demo: demoAboutProgramming,
    listItem: aboutProgrammingListItem,
    listItemAnimation: aboutProgrammingListItemAnimation,
    demoContainer: demoContainerAboutProgramming,
    ul: aboutProgrammingP,
  },
};
