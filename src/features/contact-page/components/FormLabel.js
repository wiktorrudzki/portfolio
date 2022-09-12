import React from "react";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";

import { contactFormStyles } from "../styles/ContactFormStyles";

const FormLabel = ({ children, text }) => {
  const { themeState } = useTheme(ThemeContext);

  return (
    <label className={contactFormStyles[`${themeState.theme}`].label}>
      <p className={contactFormStyles[`${themeState.theme}`].text}>
        {text}
      </p>
      {children}
    </label>
  );
};

export default FormLabel;
