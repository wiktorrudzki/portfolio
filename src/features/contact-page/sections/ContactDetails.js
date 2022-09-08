import * as React from "react";
import { useTranslation } from "react-i18next";
import Title from "@components/typography/Title";
import { ThemeContext } from "@contexts/theme/ThemeContext";
import { useTheme } from "@hooks/useTheme";
import emailIcon from "@images/icons/email.svg";
import facebookIcon from "@images/icons/facebook.svg";
import githubIcon from "@images/icons/github.svg";
import linkedInIcon from "@images/icons/linkedin.svg";

import DetailsItem from "../components/DetailsItem";
import {
  contactDetailsStyles,
} from "../styles/ContactDetailsC&S";

const ContactDetails = () => {
  const {t} = useTranslation();

  const { themeState } = useTheme(ThemeContext);

  return (
    <section className={contactDetailsStyles[`${themeState.theme}`].section}>
      <Title>{t("contact-details-title")}</Title>
      <ul className={contactDetailsStyles[`${themeState.theme}`].ul}>
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={facebookIcon}
          content={t("contact-details-facebook")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          alt="Send me an email!"
          icon={emailIcon}
          content={t("contact-details-email")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={githubIcon}
          content={t("contact-details-github")}
        />
        <DetailsItem
          styles={contactDetailsStyles[`${themeState.theme}`]}
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={linkedInIcon}
          content={t("contact-details-linkedin")}
        />
      </ul>
    </section>
  );
};

export default ContactDetails;
