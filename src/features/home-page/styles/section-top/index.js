import {
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
  image,
  imageContainer,
  imageWrapper,
  sectionTop,
  sectionTopAnimation,
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
    sectionAnimation: sectionTopAnimation,
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
    sectionAnimation: sectionTopAnimation,
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
