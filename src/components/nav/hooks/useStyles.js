import { navStyles } from "@components/nav/styles";
import {
  navBarsActivated,
  navUl,
  navUlLink,
} from "@components/nav/styles/nav.module.css";
import {
  darkestbeigeBackground,
  whitebeigeBorderTop,
} from "@dark-mode/dark-mode.module.css";

const useStyles = (menu) => {
  navStyles.dark.ul = menu
    ? `${navUl} ${darkestbeigeBackground}`
    : `${navUl} ${navBarsActivated} ${darkestbeigeBackground}`;

  navStyles.dark.ulLink = menu ? `${navUlLink} ${whitebeigeBorderTop}` : navUlLink;

  navStyles.light.ul = menu ? navUl : `${navUl} ${navBarsActivated}`;

  const navStylesDarkUl = navStyles.dark.ul;

  const navStylesDarkUlLink = navStyles.dark.ulLink;

  const navStylesLightUl = navStyles.light.ul;

  return { navStylesDarkUl, navStylesDarkUlLink, navStylesLightUl };
};

export default useStyles;
