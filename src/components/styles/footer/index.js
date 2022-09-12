import {
  footer,
  icon,
  icons,
  paddingMarginZero,
} from "./footer.module.css";
import { moredarkbeigeBackground } from "@styles/dark-mode-styles/dark-mode.module.css";

export const footerStyles = {
  dark: {
    footer: footer,
    icon: icon,
    icons: icons,
    paddingMarginZero: paddingMarginZero,
  },
  light: {
    footer: `${footer} ${moredarkbeigeBackground}`,
    icon: icon,
    icons: icons,
    paddingMarginZero: paddingMarginZero,
  },
};
