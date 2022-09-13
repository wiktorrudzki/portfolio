import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";

import FormLabel from "../components/FormLabel";
import { contactFormStyles } from "../styles/ContactFormStyles";

const ContactForm = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  return (
    <section className={contactFormStyles[`${themeState.theme}`].section}>
      <Title>{t("Contact form")}</Title>
      <form className={contactFormStyles[`${themeState.theme}`].form}>
        <FormLabel text={t("Name")}>
          <input type="text" name="name" required />
        </FormLabel>
        <FormLabel text={t("Surrname")}>
          <input type="text" name="surrname" required />
        </FormLabel>
        <FormLabel text={t("Email adress")}>
          <input type="email" name="email" required />
        </FormLabel>
        <FormLabel text={t("Phone number")}>
          <input type="number" name="phone-number" />
        </FormLabel>
        <FormLabel text={t("Message title")}>
          <input type="text" name="title" required />
        </FormLabel>
        <FormLabel text={t("Message")}>
          <textarea name="message" />
        </FormLabel>
      </form>
    </section>
  );
};

export default ContactForm;
