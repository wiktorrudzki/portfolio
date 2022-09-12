import {
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
  image,
  imageContainer,
  imageWrapper,
  sectionTop,
  sectionTopP,
} from "./section-top.module.css";
import {
  darkestbeigeBackground,
  lessblackBackground,
  moredarkbeigeBackground,
  whitebeigeColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const sectionTopStyles = {
  dark: {
    section: `${sectionTop} ${lessblackBackground}`,
    divWrapper: `${imageWrapper} ${moredarkbeigeBackground}`,
    divContainer: imageContainer,
    image: image,
    demo: `${demoSectionTop} ${darkestbeigeBackground}`,
    demoContainer: demoContainerSectionTop,
    demoContainerHeader: `${demoContainerHeaderSectionTop} ${whiteColor}`,
    demoContainerP: `${demoContainerPSectionTop} ${whiteColor}`,
    p: `${sectionTopP} ${whitebeigeColor}`,
  },
  light: {
    section: sectionTop,
    divWrapper: imageWrapper,
    divContainer: imageContainer,
    image: image,
    demo: demoSectionTop,
    demoContainer: demoContainerSectionTop,
    demoContainerHeader: demoContainerHeaderSectionTop,
    demoContainerP: demoContainerPSectionTop,
    p: sectionTopP,
  },
};

export const darkStylesSectionTop = {
  section: `${sectionTop} ${lessblackBackground}`,
  divWrapper: `${imageWrapper} ${moredarkbeigeBackground}`,
  divContainer: imageContainer,
  image: image,
  demo: `${demoSectionTop} ${darkestbeigeBackground}`,
  demoContainer: demoContainerSectionTop,
  demoContainerHeader: `${demoContainerHeaderSectionTop} ${whiteColor}`,
  demoContainerP: `${demoContainerPSectionTop} ${whiteColor}`,
  p: `${sectionTopP} ${whitebeigeColor}`,
};
