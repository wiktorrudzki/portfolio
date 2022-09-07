import * as React from "react";
import { ThemeContext } from "@components/Layout";
import IconLink from "@components/typography/IconLink";
import facebookIcon from "@images/icons/facebook.svg";
import githubIcon from "@images/icons/github.svg";
import linkedInIcon from "@images/icons/linkedin.svg";
import { darkStylesFooter, lightStylesFooter } from "@styles/FooterC&S";

const Footer = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //FOOTER STYLES
  const styles = darkMode ? darkStylesFooter : lightStylesFooter;

  return (
    <footer className={styles.footer}>
      <h4 className={styles.paddingMarginZero}>@2022 Wiktor Rudzki</h4>
      <div className={styles.paddingMarginZero}>LOGO</div>
      <ul className={styles.icons}>
        <IconLink
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={facebookIcon}
          style={`${styles.icon} ${styles.paddingMarginZero}`}
        />
        <IconLink
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={githubIcon}
          style={`${styles.icon} ${styles.paddingMarginZero}`}
        />
        <IconLink
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={linkedInIcon}
          style={`${styles.icon} ${styles.paddingMarginZero}`}
        />
      </ul>
    </footer>
  );
};

export default Footer;
