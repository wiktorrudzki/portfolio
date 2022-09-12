import React from "react";
import { LanguageContext } from "@contexts/language/LanguageContext";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";

import AboutProgramming from "./sections/AboutProgramming";
import Future from "./sections/Future";
import Projects from "./sections/Projects";
import ProjectsTitle from "./sections/ProjectsTitle";
import SectionTop from "./sections/SectionTop";

import "@styles/global.css";

const HomePage = () => {
  const { themeState } = useTheme(ThemeContext);
  const { languageState } = useLanguage(LanguageContext);

  React.useEffect(() => {
    document.body.style.backgroundColor =
      themeState.theme === "dark" ? "var(--lessblack)" : "white";
    localStorage.setItem("theme", themeState.theme);
  }, [themeState]);

  React.useEffect(() => {
    i18next.changeLanguage(languageState.lang);
    localStorage.setItem("lang", languageState.lang);
  }, [languageState]);

  return (
    <>
      <SectionTop />
      <AboutProgramming />
      <ProjectsTitle />
      <Projects />
      <Future />
    </>
  );
};

export default HomePage;
