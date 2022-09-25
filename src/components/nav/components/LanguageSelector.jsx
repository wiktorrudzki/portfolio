import React from "react";
import { languageSelectorStyles } from "@components/nav/styles";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";

const LanguageSelector = () => {
    const { languageState, languageDispatch } = useLanguage();
    const { themeState } = useTheme();

    return (
        <select
          onChange={(e) => {
            languageDispatch({
              type: "CHANGE_LANG",
              lang: e.target[e.target.selectedIndex].value,
            });
          }}
          defaultValue={languageState.lang}
          className={languageSelectorStyles[themeState.theme].selector}
        >
          <option
            value="pl"
            className={languageSelectorStyles[themeState.theme].option}
          >
            Polski
          </option>
          <option
            value="en"
            className={languageSelectorStyles[themeState.theme].option}
          >
            English
          </option>
        </select>
    )
}

export default LanguageSelector;
