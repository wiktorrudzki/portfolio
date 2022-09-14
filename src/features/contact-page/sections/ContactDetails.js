import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";
import emailIcon from "@images/icons/email.svg";
import facebookIcon from "@images/icons/facebook.svg";
import githubIcon from "@images/icons/github.svg";
import linkedInIcon from "@images/icons/linkedin.svg";

import DetailsItem from "../components/DetailsItem";
import { contactDetailsStyles } from "../styles/ContactDetailsStyles";

const ContactDetails = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  return (
    <section className={contactDetailsStyles[`${themeState.theme}`].section}>
      <Title styling={contactDetailsStyles[`${themeState.theme}`].title}>{t("Contact data")}</Title>
      <ul className={contactDetailsStyles[`${themeState.theme}`].ul}>
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={facebookIcon}
          content={t("Wiktor Rudzki")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          alt="Send me an email!"
          icon={emailIcon}
          content={t("wiktor1rudzki@gmail.com")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={githubIcon}
          content={t("wiktorrudzki")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={linkedInIcon}
          content={t("Wiktor Rudzki")}
        />
      </ul>
    </section>
  );
};

export default ContactDetails;
