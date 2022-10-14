import React, { useReducer } from "react";
import reducer from "@contexts/theme/reducer";
import useCookie from "@hooks/useCookies";

import { Actions, Theme } from "./module";

type Props = {
  children: JSX.Element;
};

type ThemeContextType = [Theme, React.Dispatch<Actions>];

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme] = useCookie("theme", "dark");

  const [themeState, themeDispatch] = useReducer(reducer, {
    theme: theme ? theme : "light",
  });

  return (
    <ThemeContext.Provider value={[ themeState, themeDispatch ]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext<undefined | ThemeContextType>(
  undefined
);
