import {
  demoSectionTop,
  demoContainerSectionTop,
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
} from "../styles/demo.module.css";

import {
  sectionTop,
  imageWrapper,
  imageContainer,
  image,
  sectionTopP,
} from "../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  whitebeigeColor,
  lessblackBackground,
} from "../styles/dark-mode-styles/dark-mode.module.css";

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

export const lightStylesSectionTop = {
  section: sectionTop,
  divWrapper: imageWrapper,
  divContainer: imageContainer,
  image: image,
  demo: demoSectionTop,
  demoContainer: demoContainerSectionTop,
  demoContainerHeader: demoContainerHeaderSectionTop,
  demoContainerP: demoContainerPSectionTop,
  p: sectionTopP,
};

export const polskiSectionTop = {
    demoTitle: "Wiktor Rudzki",
    demoSubtitle: "Kilka słów o mnie",
    p: "Aktualnie jestem studentem 2 roku informatyki stosowanej na Politechnice Krakowskiej. Od dłuższego czasu interesuje się szeroko pojętym programowaniem, a od kilku miesięcy stricte \"frontedem\" przy użyciu technologii jaką jest React"
}

export const englishSectionTop = {
    demoTitle: "Wiktor Rudzki",
    demoSubtitle: "A few words about me",
    p: "Currently, I am second year Student of computer science on Politechnika Krakowska. I have been interested in programming in the broadest sense for a long time and for the last few months I've been strictly passionated about \"frontend\" using React technology"
}
