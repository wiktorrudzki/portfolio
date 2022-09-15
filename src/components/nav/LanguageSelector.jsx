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
          defaultValue={languageState.lang}
        >
          <option
            value="pl"
          >
            Polski
          </option>
          <option
            value="en"
          >
            English
          </option>
        </select>
    )
}

export default LanguageSelector;
