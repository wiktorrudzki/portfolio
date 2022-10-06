import React, { useReducer } from "react";
import reducer from "@contexts/language/reducer";
import { useCookie } from "@hooks/useCookies";

export const LanguageProvider = ({ children }) => {
  const [language] = useCookie("lang", "pl");

  const [languageState, languageDispatch] = useReducer(reducer, {
    lang: language,
  });

  return (
    <LanguageContext.Provider value={{ languageState, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageContext = React.createContext(undefined);
