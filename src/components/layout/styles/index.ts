import {
  footer,
  icon,
  icons,
  paddingMarginZero,
} from "./footer.module.css";
import { darkestbeigeBackground, whitebeigeColor } from "@styles/dark-mode-styles/dark-mode.module.css";

export const footerStyles = {
  dark: {
    footer: `${footer} ${darkestbeigeBackground} ${whitebeigeColor}`,
    icon: icon,
    icons: icons,
    paddingMarginZero: paddingMarginZero,
  },
  light: {
    footer: footer,
    icon: icon,
    icons: icons,
    paddingMarginZero: paddingMarginZero,
  },
};
