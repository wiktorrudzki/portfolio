import React from "react";
import { useCookie } from "@hooks/useCookies";
import { useTheme } from "@hooks/useTheme";

import "@components/nav/styles/switch-mode.css";

const ThemeSelector = () => {
  const { themeState, themeDispatch } = useTheme();

  const [theme, updateTheme] = useCookie("theme");

  function changeCookie() {
    updateTheme(themeState.theme === "light" ? "dark" : "light");
    themeDispatch({
      type: "CHANGE_THEME",
      theme: themeState.theme === "light" ? "dark" : "light",
    });
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={themeState.theme === "light" ? false : true}
      />
      <span
        className="slider round"
        onClick={changeCookie}
      ></span>
    </label>
  );
};

export default ThemeSelector;
