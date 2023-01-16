import React from "react";
import { footerStyles } from "@components/layout/styles";
import { IconLink } from "@components/link";
import { useTheme } from "@hooks/useTheme";
import favicon from "@images/favicon.png"
import facebookIcon from "@images/icons/facebook.svg";
import facebookIconDark from "@images/icons/facebook-dark.svg";
import githubIcon from "@images/icons/github.svg";
import githubIconDark from "@images/icons/github-dark.svg";
import linkedInIcon from "@images/icons/linkedin.svg";
import linkedInIconDark from "@images/icons/linkedin-dark.svg";

const Footer = () => {
  const [ themeState ] = useTheme();

  return (
    <footer className={footerStyles[themeState.theme].footer}>
      <h4>
        @2022 Wiktor Rudzki
      </h4>
      <div className={footerStyles[themeState.theme].paddingMarginZero}>
        <img src={favicon} width="75%" alt="logo" />
      </div>
      <ul className={footerStyles[themeState.theme].icons}>
        <IconLink
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={themeState.theme === "light" ? facebookIcon : facebookIconDark}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
        <IconLink
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={themeState.theme === "light" ? githubIcon : githubIconDark}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
        <IconLink
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={themeState.theme === "light" ? linkedInIcon : linkedInIconDark}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
      </ul>
    </footer>
  );
};

export default Footer;
