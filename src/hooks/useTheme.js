import React, { useContext, useReducer } from 'react';
import reducer from '@contexts/theme/reducer';
import { ThemeContext } from '@contexts/theme/ThemeContext';

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(reducer, {
    theme: `${localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"}`,
  });

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
