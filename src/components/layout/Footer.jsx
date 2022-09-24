import React from "react";
import { IconLink } from "@components/link";
import { footerStyles } from "@components-styles/footer";
import { useTheme } from "@hooks/useTheme";
import favicon from "@images/favicon.png"
import facebookIcon from "@images/icons/facebook.svg";
import githubIcon from "@images/icons/github.svg";
import linkedInIcon from "@images/icons/linkedin.svg";

const Footer = () => {
  const { themeState } = useTheme();

  return (
    <footer className={footerStyles[themeState.theme].footer}>
      <h4 className={footerStyles[themeState.theme].h4}>
        @2022 Wiktor Rudzki
      </h4>
      <div className={footerStyles[themeState.theme].paddingMarginZero}>
        <img src={favicon} width="75%" alt="logo" />
      </div>
      <ul className={footerStyles[themeState.theme].icons}>
        <IconLink
          url="https://www.facebook.com/wiktor.rudzki.73"
          alt="Find me on Facebook!"
          icon={facebookIcon}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
        <IconLink
          url="https://github.com/wiktorrudzki"
          alt="Find me on GitHub!"
          icon={githubIcon}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
        <IconLink
          url="https://www.linkedin.com/in/wiktor-rudzki-3b64b424b/"
          alt="Find me on LinkedIn!"
          icon={linkedInIcon}
          style={`${footerStyles[themeState.theme].icon} ${
            footerStyles[themeState.theme].paddingMarginZero
          }`}
        />
      </ul>
    </footer>
  );
};

export default Footer;
