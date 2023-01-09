import React, { useEffect } from "react";
import { useLanguage } from "@hooks/useLanguage";
import { useRoute } from "@hooks/useRoute";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";

import AboutProgramming from "./sections/AboutProgramming";
import Future from "./sections/Future";
import Projects from "./sections/Projects";
import ProjectsTitle from "./sections/ProjectsTitle";
import SectionTop from "./sections/SectionTop";

import "@styles/global.css";

const HomePage: React.FC = () => {
  const [ themeState ] = useTheme();
  const { languageState } = useLanguage();
  //eslint-disable-next-line
  const { currentRoute, setCurrentRoute } = useRoute();

  setCurrentRoute("/");

  useEffect(() => {
    document.body.style.backgroundColor =
      themeState.theme === "dark" ? "var(--lessblack)" : "white";
  }, [themeState]);

  useEffect(() => {
    i18next.changeLanguage(languageState.lang);
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
