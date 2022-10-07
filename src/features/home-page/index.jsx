import React, { useEffect } from "react";
import { useCookie } from "@hooks/useCookies";
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

const HomePage = () => {
  const { themeState, themeDispatch } = useTheme();
  const { languageState } = useLanguage();
  //eslint-disable-next-line
  const { currentRoute, setCurrentRoute } = useRoute();
  const [theme] = useCookie("theme", "light");

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
