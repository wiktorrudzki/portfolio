import React from "react";
import { useLanguage } from "@hooks/useLanguage";

const LanguageSelector = () => {
    const { languageState, languageDispatch } = useLanguage();

    return (
        <select
          onChange={(e) => {
            languageDispatch({
              type: "CHANGE_LANG",
              lang: e.target[e.target.selectedIndex].value,
            });
          }}
        >
          <option
            value="pl"
            selected={languageState.lang === "pl" ? true : false}
          >
            Polski
          </option>
          <option
            value="en"
            selected={languageState.lang === "en" ? true : false}
          >
            English
          </option>
        </select>
    )
}

export default LanguageSelector;
