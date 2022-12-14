import React from "react";
import { useTranslation } from "react-i18next";
import Recaptcha from "react-recaptcha";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";
import emailjs from "emailjs-com";

import FormLabel from "../components/FormLabel";
import { contactFormStyles } from "../styles/ContactFormStyles";

const ContactForm = () => {
  const { t } = useTranslation();

  const [themeState] = useTheme();
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7i1dnu4",
        "template_w60jgb4",
        e.currentTarget,
        "zq7bIfvR_Q0JkeqZ8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  }

  const verifyCallback = function () {
    document.getElementById("submitBtn").removeAttribute("disabled");
  };

  return (
    <section className={contactFormStyles[themeState.theme].section}>
      <Title styling={contactFormStyles[themeState.theme].title}>
        {t("Contact form")}
      </Title>
      <form
        className={contactFormStyles[themeState.theme].form}
        onSubmit={(e) => sendEmail(e)}
      >
        <FormLabel text={t("Name")}>
          <input
            type="text"
            name="name"
            required
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel text={t("Surrname")}>
          <input
            type="text"
            name="surrname"
            required
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel text={t("Email adress")}>
          <input
            type="email"
            name="email"
            required
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel text={t("Phone number")}>
          <input
            type="number"
            name="phone-number"
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel text={t("Message title")}>
          <input
            type="text"
            name="subject"
            required
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel text={t("Message")}>
          <textarea
            name="message"
            className={contactFormStyles[themeState.theme].input}
          />
        </FormLabel>
        <FormLabel>
          <Recaptcha
            sitekey="6LdEJPwhAAAAAIwokcxZsfgHUnwCCy2NpIW0TFay"
            render="explicit"
            verifyCallback={verifyCallback}
            required
          />
        </FormLabel>
        <button
          type="submit"
          className={contactFormStyles[themeState.theme].button}
          disabled
          id="submitBtn"
        >
          {t("Send")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
