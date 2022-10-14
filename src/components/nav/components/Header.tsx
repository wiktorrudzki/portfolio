import React from "react";
import { useTranslation } from "react-i18next";
import { navStyles } from "@components/nav/styles";
import { useTheme } from "@hooks/useTheme";

const Header = () => {
  const { t } = useTranslation();

  const [ themeState ] = useTheme();

  return (
    <header className={navStyles[themeState.theme].header}>
      <h4 className={navStyles[themeState.theme].h4}>
        {t("WIKTOR RUDZKI")}
      </h4>
      <h4 className={navStyles[themeState.theme].h4}>
        {t("FRONTEND DEVELOPER")}
      </h4>
    </header>
  );
};

export default Header;
