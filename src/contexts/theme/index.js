import React, { useReducer } from "react";
import reducer from "@contexts/theme/reducer";
import { useCookie } from "@hooks/useCookies";

export const ThemeProvider = ({ children }) => {
  const [theme] = useCookie("theme", "light");

  const [themeState, themeDispatch] = useReducer(reducer, {
    theme: theme ? theme : "light",
  });

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext(undefined);
