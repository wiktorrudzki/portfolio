import React from "react";
import useCookie from "@hooks/useCookies";
import { useTheme } from "@hooks/useTheme";

import "@components/nav/styles/switch-mode.css";

const ThemeSelector = () => {
  const [themeState, themeDispatch] = useTheme();
  //eslint-disable-next-line
  const [theme, updateTheme] = useCookie("theme", "light");

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={themeState.theme === "light" ? false : true}
      />
      <span
        className="slider round"
        onClick={() => {
          updateTheme(themeState.theme === "light" ? "dark" : "light");
          themeDispatch({
            type: "CHANGE_THEME",
            theme: themeState.theme === "light" ? "dark" : "light",
          });
        }}
      ></span>
    </label>
  );
};

export default ThemeSelector;
