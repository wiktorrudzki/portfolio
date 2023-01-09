import React, { useEffect } from "react";
import { useLanguage } from "@hooks/useLanguage";
import { useRoute } from "@hooks/useRoute";
import { useTheme } from "@hooks/useTheme";

import i18next from "../../i18n";

import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";

import { layoutContact } from "./styles/contact.module.css";

const Contact = () => {
  const [ themeState ] = useTheme();
  const { languageState } = useLanguage();
  //eslint-disable-next-line
  const { currentRoute, setCurrentRoute } = useRoute();

  setCurrentRoute("contact");

  useEffect(() => {
    document.body.style.backgroundColor =
      themeState.theme === "dark" ? "var(--lessblack)" : "white";

    // eslint-disable-next-line
  }, [themeState]);

  useEffect(() => {
    i18next.changeLanguage(languageState.lang);

    // eslint-disable-next-line
  }, [languageState]);

  return (
    <section className={layoutContact}>
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
