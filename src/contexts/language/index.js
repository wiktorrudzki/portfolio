import React, { useReducer } from "react";
import reducer from '@contexts/language/reducer';

export const LanguageProvider = ({ children }) => {
    const [languageState, languageDispatch] = useReducer(reducer, {
      lang: `${localStorage.getItem("lang") ? localStorage.getItem("lang") : "pl"}`,
    });
  
    return (
      <LanguageContext.Provider value={{ languageState, languageDispatch }}>
        {children}
      </LanguageContext.Provider>
    );
  };

export const LanguageContext = React.createContext(undefined);
