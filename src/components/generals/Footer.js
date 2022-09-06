import * as React from "react";
import { Link } from "gatsby";
import facebookIcon from "../../images/icons/facebook.svg";
import githubIcon from "../../images/icons/github.svg";
import linkedInIcon from "../../images/icons/linkedin.svg";
import { ThemeContext } from "./Layout";
import { darkStylesFooter, lightStylesFooter } from "../../content&styles/FooterC&S";

const Footer = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //FOOTER STYLES
  const styles = darkMode ? darkStylesFooter : lightStylesFooter;

  return (
    <footer className={styles.footer}>
      <h4 className={styles.paddingMarginZero}>@2022 Wiktor Rudzki</h4>
      <div className={styles.paddingMarginZero}>LOGO</div>
      <ul className={styles.icons}>
        <Link to="https://www.facebook.com/wiktor.rudzki.73" target="_blank">
          <li>
            <img
              className={`${styles.icon} ${styles.paddingMarginZero}`}
              src={facebookIcon}
              alt="Find me on Facebook!"
            />
          </li>
        </Link>
        <Link to="https://github.com/wiktorrudzki" target="_blank">
          <li>
            <img
              className={`${styles.icon} ${styles.paddingMarginZero}`}
              src={githubIcon}
              alt="Find me on GitHub!"
            />
          </li>
        </Link>
        <Link to="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/" target="_blank">
          <li>
            <img
              className={`${styles.icon} ${styles.paddingMarginZero}`}
              src={linkedInIcon}
              alt="Find me on LinkedIn!"
            />
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
