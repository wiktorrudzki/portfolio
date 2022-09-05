import {
  sectionFuture,
  div1Future,
  div1ImageFuture,
  div2Future,
  div2H2Future,
  div2P1Future,
  div2P2Future,
  logosWrapperFuture,
  div2UlFuture,
  div2LiFuture,
  div2LiImageFuture,
} from "../styles/index.module.css";

import {
  whiteColor,
  moredarkbeigeBackground,
  darkestbeigeBackground,
  beigeColor,
} from "../styles/dark-mode-styles/dark-mode.module.css";

export const darkStylesFuture = {
  section: `${sectionFuture} ${darkestbeigeBackground}`,
  div1: div1Future,
  div1Image: div1ImageFuture,
  div2: `${div2Future} ${moredarkbeigeBackground}`,
  div2H2: `${div2H2Future} ${whiteColor}`,
  div2P1: `${div2P1Future} ${beigeColor}`,
  div2P2: `${div2P2Future} ${beigeColor}`,
  logosWrapper: logosWrapperFuture,
  div2Ul: div2UlFuture,
  div2Li: `${div2LiFuture} ${whiteColor}`,
  div2LiImage: div2LiImageFuture,
};

export const lightStylesFuture = {
  section: sectionFuture,
  div1: div1Future,
  div1Image: div1ImageFuture,
  div2: div2Future,
  div2H2: div2H2Future,
  div2P1: div2P1Future,
  div2P2: div2P2Future,
  logosWrapper: logosWrapperFuture,
  div2Ul: div2UlFuture,
  div2Li: div2LiFuture,
  div2LiImage: div2LiImageFuture,
};

export const polskiFuture = {
  header: "Moje Przyszłe Cele",
  headerP1:
    "Jestem otwarty na nowe technoologie i z chęcią je poznaję w celu nieustannego poszerzania swoich horyzontów. Z czasem na pewno będę poznawał wiele z poniższych",
  headerP2:
    "Owe technologie oraz biblioteki z pewnością przydadzą się przy rozwijaniu umiejętności z zakresu tworzenia:",
  li1: "Stron internetowych",
  li2: "Aplikacji mobilnych",
  li3: "Aplikacji desktopowych",
};

export const englishFuture = {
  header: "My Future Gaols",
  headerP1:
    "I am open to new technologies and I am experiencing them with a lot of pleasure in order to broaden my mind. Over time, I am defenitely discover many of the following",
  headerP2:
    "Those technologies and libraries are definitely going to be really helpful while developing:",
  li1: "Websites",
  li2: "Mobile applications",
  li3: "Desktop applications",
};
