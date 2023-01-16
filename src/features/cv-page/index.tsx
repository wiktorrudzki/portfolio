import React, { useEffect } from "react";
import Pdf from "@features/cv-page/sections/Pdf";
import { useLanguage } from "@hooks/useLanguage";
import { useRoute } from "@hooks/useRoute";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";

const Cv = () => {
  const [ themeState ] = useTheme();
  const { languageState } = useLanguage();
  //eslint-disable-next-line
  const { currentRoute, setCurrentRoute } = useRoute();

  setCurrentRoute("CV");

  useEffect(() => {
    document.body.style.backgroundColor =
      themeState.theme === "dark" ? "var(--lessblack)" : "white";

    // eslint-disable-next-line
  }, [themeState]);

  useEffect(() => {
    i18next.changeLanguage(languageState.lang);
    
  }, [languageState]);

  return <Pdf />;
};

export default Cv;
