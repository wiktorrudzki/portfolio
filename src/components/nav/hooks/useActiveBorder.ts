import { navStyles } from "@components/nav/styles";
import { useTheme } from "@hooks/useTheme";

import { link } from "@components/nav/styles/nav.module.css";

const useActiveBorder = (route: string, currentRoute: string) => {
  const [ themeState ] = useTheme();

  const classes = currentRoute.includes(route)
    ? `${
        navStyles[themeState.theme] ? navStyles[themeState.theme].ulLink : ""
      } ${link} ${
        navStyles[themeState.theme]
          ? navStyles[themeState.theme].linkActive
          : ""
      }`
    : `${
        navStyles[themeState.theme] ? navStyles[themeState.theme].ulLink : ""
      } ${link}`;

  return classes;
};

export default useActiveBorder;
