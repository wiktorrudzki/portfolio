import { Link } from "gatsby";
import * as React from "react";
import { SetLanguage, ThemeContext } from "../generals/Layout";
import facebookIcon from "../../images/icons/facebook.svg";
import githubIcon from "../../images/icons/github.svg";
import linkedInIcon from "../../images/icons/linkedin.svg";
import emailIcon from "../../images/icons/email.svg";
import { darkStylesContactDetails, lightStylesContactDetails } from "../../content&styles/contact-page/ContactDetailsC&S";

const ContactDetails = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  //CONTACT-DETAILS STYLES

  const styles = darkMode ? darkStylesContactDetails : lightStylesContactDetails;

  //CONTACT-DETAILS LANGUAGES

  const content = polish ? {} : {};

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{content.h2}</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img className={styles.img} src={facebookIcon} alt="Find me on Facebook!"></img>
          <Link to="https://www.facebook.com/wiktor.rudzki.73">
            {content.facebook}
          </Link>
        </li>
        <li className={styles.li}>
          <img className={styles.img} src={emailIcon} alt="Send me an email!"></img>
            {content.email}
        </li>
        <li className={styles.li}>
          <img className={styles.img} src={githubIcon} alt="Find me on GitHub!"></img>
          <Link to="https://github.com/wiktorrudzki">
            {content.github}
          </Link>
        </li>
        <li className={styles.li}>
          <img className={styles.img} src={linkedInIcon} alt="Find me on LinkedIn!"></img>
          <Link to="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/">
            {content.linkedin}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ContactDetails;
