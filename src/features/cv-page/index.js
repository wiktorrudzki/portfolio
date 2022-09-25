import React, { useEffect } from "react";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";
import Pdf from "@features/cv-page/sections/pdf";

const Cv = () => {
  const { themeState } = useTheme();
  const { languageState } = useLanguage();

  useEffect(() => {
    document.body.style.backgroundColor =
      themeState.theme === "dark" ? "var(--lessblack)" : "white";
    localStorage.setItem("theme", themeState.theme);
  }, [themeState]);

  useEffect(() => {
    i18next.changeLanguage(languageState.lang);
    localStorage.setItem("lang", languageState.lang);
  }, [languageState]);

  return (
    <Pdf />
  );
};

export default Cv;
