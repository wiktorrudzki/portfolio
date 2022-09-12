import {
  aboutProgramming,
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
    demoContainer: `${demoContainerAboutProgramming} ${whiteColor}`,
    ul: `${aboutProgrammingP} ${whitebeigeColor}`,
  },
  light: {
    section: aboutProgramming,
    divWrapper: imageWrapperAboutProgramming,
    divContainer: imageContainerAboutProgramming,
    image: imageAboutProgramming,
    demo: demoAboutProgramming,
    demoContainer: demoContainerAboutProgramming,
    ul: aboutProgrammingP,
  },
};
