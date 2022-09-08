import React, { useContext, useReducer } from 'react';
import { LanguageContext } from '@contexts/language/LanguageContext';
import reducer from '@contexts/language/reducer';

const LanguageProvider = ({ children }) => {
  const [languageState, languageDispatch] = useReducer(reducer, {
    lang: 'pl',
  });

  return (
    <LanguageContext.Provider value={{ languageState, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { LanguageProvider, useLanguage };
