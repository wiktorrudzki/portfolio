import * as React from "react";
import { Link } from "gatsby";
import facebookIcon from "../../images/icons/facebook.svg";
import githubIcon from "../../images/icons/github.svg";
import instagramIcon from "../../images/icons/instagram.svg";
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
        <Link to="https://www.instagram.com/wiktor.rudzki/" target="_blank">
          <li>
            <img
              className={`${styles.icon} ${styles.paddingMarginZero}`}
              src={instagramIcon}
              alt="Find me on Instagram!"
            />
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
