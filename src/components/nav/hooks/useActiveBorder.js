import { navStyles } from "@components/nav/styles";
import { useTheme } from "@hooks/useTheme";

import { link } from "@components/nav/styles/nav.module.css";

const useActiveBorder = (route) => {
  const url = window.location.href;

  const { themeState } = useTheme();

  const classes = url.includes(route)
    ? `${navStyles[themeState.theme].ulLink} ${link} ${
        navStyles[themeState.theme].linkActive
      }`
    : `${navStyles[themeState.theme].ulLink} ${link}`;

  return classes
};

export default useActiveBorder;
