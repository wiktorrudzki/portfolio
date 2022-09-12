import {
  div1Future,
  div1ImageFuture,
  div2Future,
  div2H2Future,
  div2LiFuture,
  div2LiImageFuture,
  div2P1Future,
  div2P2Future,
  div2UlFuture,
  logosWrapperFuture,
  sectionFuture,
} from "./future.module.css";
import {
  beigeColor,
  darkestbeigeBackground,
  moredarkbeigeBackground,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const futureStyles = {
  dark: {
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
  },
  light: {
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
  },
};

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
