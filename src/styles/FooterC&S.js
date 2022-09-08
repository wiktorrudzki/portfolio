import { moredarkbeigeBackground } from "./dark-mode-styles/dark-mode.module.css";
import {
  footer,
  icon,
  icons,
  paddingMarginZero,
} from "@styles/footer.module.css";

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

export const lightStylesFooter = {
  footer: footer,
  icon: icon,
  icons: icons,
  paddingMarginZero: paddingMarginZero,
};

export const darkStylesFooter = {
  footer: `${footer} ${moredarkbeigeBackground}`,
  icon: icon,
  icons: icons,
  paddingMarginZero: paddingMarginZero,
};
