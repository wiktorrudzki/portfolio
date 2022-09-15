import React from "react";
import "@components-styles/nav/switch-mode.css";
import { useTheme } from "@hooks/useTheme";

const ThemeSelector = () => {
    const { themeState, themeDispatch } = useTheme();

    return (
        <label className="switch">
          <input
            type="checkbox"
            checked={themeState.theme === "light" ? false : true}
          />
          <span
            className="slider round"
            onClick={() => {
              themeDispatch({
                type: "CHANGE_THEME",
                theme: themeState.theme === "light" ? "dark" : "light",
              });
            }}
          ></span>
        </label>
    )
}

export default ThemeSelector;
