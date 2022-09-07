import * as React from "react";
import { useTranslation } from "react-i18next";
import { SetLanguage, ThemeContext } from "@components/Layout";
import Title from "@components/typography/Title";
import emailIcon from "@images/icons/email.svg";
import facebookIcon from "@images/icons/facebook.svg";
import githubIcon from "@images/icons/github.svg";
import linkedInIcon from "@images/icons/linkedin.svg";

import DetailsItem from "../components/DetailsItem";
import {
  darkStylesContactDetails,
  englishContactDetails,
  lightStylesContactDetails,
  polskiContactDetails,
} from "../styles/ContactDetailsC&S";

const ContactDetails = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  const {t} = useTranslation();

  //CONTACT-DETAILS STYLES

  const styles = darkMode
    ? darkStylesContactDetails
    : lightStylesContactDetails;

  //CONTACT-DETAILS LANGUAGES

  const content = polish ? polskiContactDetails : englishContactDetails;

  return (
    <section className={styles.section}>
      <Title>{t("contact-details-title")}</Title>
      <ul className={styles.ul}>
        <DetailsItem
          styles={styles}
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={facebookIcon}
          content={t("contact-details-facebook")}
        />
        <DetailsItem
          styles={styles}
          alt="Send me an email!"
          icon={emailIcon}
          content={t("contact-details-email")}
        />
        <DetailsItem
          styles={styles}
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={githubIcon}
          content={t("contact-details-github")}
        />
        <DetailsItem
          styles={styles}
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
