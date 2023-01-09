import {
  slide,
  slideImg,
  slideShow,
  slideShowSlider,
  switchSlideBtn,
  switchSlideList,
  slideInfo,
  leftArrow,
  rightArrow,
  currentBtn,
} from "./imageSlider.module.css";
import { whiteBackground, whiteBorder } from "@dark-mode/dark-mode.module.css";

export const imageSliderStyles = {
  dark: {
    slide,
    slideImg,
    slideShow,
    slideShowSlider,
    switchSlideBtn,
    switchSlideList,
    slideInfo,
    leftArrow,
    rightArrow,
    currentBtn,
  },
  light: {
    slide,
    slideImg,
    slideShow,
    slideShowSlider,
    switchSlideBtn: `${switchSlideBtn} ${whiteBorder}`,
    switchSlideList,
    slideInfo,
    leftArrow,
    rightArrow,
    currentBtn: whiteBackground,
  },
};
