import React from "react";
import { languageSelectorStyles } from "@components/nav/styles";
import useCookie from "@hooks/useCookies";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";

const LanguageSelector = () => {
  //eslint-disable-next-line
  const { languageState, languageDispatch } = useLanguage();
  const [themeState] = useTheme();
  const [language, updateLanguage] = useCookie("lang", "pl");

  return (
    <select
      onChange={(e) => {
        updateLanguage(((e.target[e.target.selectedIndex] as HTMLOptionElement).value as "pl" | "en"));
        languageDispatch({
          type: "CHANGE_LANG",
          lang: ((e.target[e.target.selectedIndex] as HTMLOptionElement).value as "pl" | "en"),
        });
      }}
      defaultValue={language}
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
  );
};

export default LanguageSelector;
