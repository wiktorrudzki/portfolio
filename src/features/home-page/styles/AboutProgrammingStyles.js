import {
  aboutProgramming,
  aboutProgrammingP,
  imageAboutProgramming,
  imageContainerAboutProgramming,
  imageWrapperAboutProgramming,
} from "./index.module.css";
import {
  darkestbeigeBackground,
  moredarkbeigeBackground,
  whitebeigeColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";
import {
  demoAboutProgramming,
  demoContainerAboutProgramming,
} from "@styles/demo.module.css";

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
