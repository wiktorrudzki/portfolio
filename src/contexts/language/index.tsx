import React, { useReducer } from "react";
import reducer from "@contexts/language/reducer";
import useCookie from "@hooks/useCookies";

import { Actions, Lang } from "./module";

type Props = {
  children: React.ReactNode
}

type LangContextType = {
  languageState: Lang;
  languageDispatch: React.Dispatch<Actions>;
}

export const LanguageProvider: React.FC <Props> = ({ children }) => {
  const [language] = useCookie("lang", "pl");

  const [languageState, languageDispatch] = useReducer(reducer, {
    lang: language ? language : "pl",
  });

  return (
    <LanguageContext.Provider value={{ languageState, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageContext = React.createContext<undefined | LangContextType>(undefined);
