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

export const darkStylesAboutProgramming = {
  section: `${aboutProgramming} ${darkestbeigeBackground}`,
  divWrapper: imageWrapperAboutProgramming,
  divContainer: imageContainerAboutProgramming,
  image: imageAboutProgramming,
  demo: `${demoAboutProgramming} ${moredarkbeigeBackground}`,
  demoContainer: `${demoContainerAboutProgramming} ${whiteColor}`,
  ul: `${aboutProgrammingP} ${whitebeigeColor}`,
};

export const lightStylesAboutProgramming = {
  section: aboutProgramming,
  divWrapper: imageWrapperAboutProgramming,
  divContainer: imageContainerAboutProgramming,
  image: imageAboutProgramming,
  demo: demoAboutProgramming,
  demoContainer: demoContainerAboutProgramming,
  ul: aboutProgrammingP,
};

export const polskiAboutProgramming = {
    demoTitle: "Moje Technologie",
    demoSubtitle: "Technologie oraz języki, z którymi miałem styczność",
    li1: "React",
    li2: "Gatsby",
    li3: "JavaScript ES6",
    li4: "Node JS",
    li5: "Podstawy c++, c#",
    li6: "Podstawy python"
}

export const englishAboutProgramming = {
    demoTitle: "My Technologies",
    demoSubtitle: "Technologies and languages that I had a contact with",
    li1: "React",
    li2: "Gatsby",
    li3: "JavaScript ES6",
    li4: "Node JS",
    li5: "Basics of c++, c#",
    li6: "Basics of python"
}
