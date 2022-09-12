import * as React from "react";
import { useTranslation } from "react-i18next";
import Title from "@components/typography/Title";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";

import { contactFormStyles } from "../styles/ContactFormStyles";

const ContactForm = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme(ThemeContext);

  return (
    <section className={contactFormStyles[`${themeState.theme}`].section}>
      <Title>{t("form-header")}</Title>
      <form className={contactFormStyles[`${themeState.theme}`].form}>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-name")}
          </p>
          <input type="text" name="name" required />
        </label>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-surrname")}
          </p>
          <input type="text" name="surrname" required />
        </label>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-email")}
          </p>
          <input type="email" name="email" required />
        </label>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-number")}
          </p>
          <input type="number" name="phone-number" />
        </label>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-title")}
          </p>
          <input type="text" name="title" required />
        </label>
        <label className={contactFormStyles[`${themeState.theme}`].label}>
          <p className={contactFormStyles[`${themeState.theme}`].text}>
            {t("form-message")}
          </p>
          <textarea name="message" />
        </label>
      </form>
    </section>
  );
};

export default ContactForm;
