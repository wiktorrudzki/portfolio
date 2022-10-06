import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "@components/typography";
import { useTheme } from "@hooks/useTheme";
import emailIcon from "@images/icons/email.svg";
import emailIconDark from "@images/icons/email-dark.svg";
import facebookIcon from "@images/icons/facebook.svg";
import facebookIconDark from "@images/icons/facebook-dark.svg";
import githubIcon from "@images/icons/github.svg";
import githubIconDark from "@images/icons/github-dark.svg";
import linkedInIcon from "@images/icons/linkedin.svg";
import linkedInIconDark from "@images/icons/linkedin-dark.svg";

import DetailsItem from "../components/DetailsItem";
import { contactDetailsStyles } from "../styles/ContactDetailsStyles";

const ContactDetails = () => {
  const { t } = useTranslation();

  const { themeState } = useTheme();

  return (
    <section className={contactDetailsStyles[themeState.theme].section}>
      <Title styling={contactDetailsStyles[themeState.theme].title}>
        {t("Contact data")}
      </Title>
      <ul className={contactDetailsStyles[themeState.theme].ul}>
        <DetailsItem
          styles={contactDetailsStyles[themeState.theme]}
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={themeState.theme === "light" ? facebookIcon : facebookIconDark}
          content={t("Wiktor Rudzki")}
        />
        <DetailsItem
          styles={contactDetailsStyles[themeState.theme]}
          alt="Send me an email!"
          icon={themeState.theme === "light" ? emailIcon : emailIconDark}
          content={t("wiktor1rudzki@gmail.com")}
        />
        <DetailsItem
          styles={contactDetailsStyles[themeState.theme]}
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={themeState.theme === "light" ? githubIcon : githubIconDark}
          content={t("wiktorrudzki")}
        />
        <DetailsItem
          styles={contactDetailsStyles[themeState.theme]}
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={themeState.theme === "light" ? linkedInIcon : linkedInIconDark}
          content={t("Wiktor Rudzki")}
        />
      </ul>
    </section>
  );
};

export default ContactDetails;
