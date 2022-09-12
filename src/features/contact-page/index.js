import React from "react";
import { LanguageContext } from "@contexts/language/LanguageContext";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";

import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";

import { layoutContact } from "./styles/contact.module.css";

const Contact = () => {
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
    <section className={layoutContact}>
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
