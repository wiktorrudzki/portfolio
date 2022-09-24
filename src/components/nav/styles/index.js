import { selector, option } from "./language-selector.module.css";

import { whitebeigeBorder2px, whitebeigeColor, darkestbeigeBackground } from "@styles/dark-mode-styles/dark-mode.module.css"

export const languageSelectorStyles = {
  dark: {
    selector: `${selector} ${whitebeigeColor} ${whitebeigeBorder2px} ${darkestbeigeBackground}`,
    option: `${option} ${whitebeigeColor} ${darkestbeigeBackground}`,
  },
  light: {
    selector: selector,
    option: option,
  },
};
