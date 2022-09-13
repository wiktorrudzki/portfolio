import React, { useReducer } from "react";
import reducer from '@contexts/theme/reducer';

export const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(reducer, {
    theme: `${localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"}`,
  });

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext(undefined);
