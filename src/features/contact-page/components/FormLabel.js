import React from "react";
import { useTheme } from "@hooks/useTheme";

import { contactFormStyles } from "../styles/ContactFormStyles";

const FormLabel = ({ children, text }) => {
  const { themeState } = useTheme();

  return (
    <label className={contactFormStyles[themeState.theme].label}>
      <p className={contactFormStyles[themeState.theme].text}>
        {text}
      </p>
      {children}
    </label>
  );
};

export default FormLabel;
