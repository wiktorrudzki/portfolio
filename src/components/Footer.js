import * as React from "react";
import { Link } from "gatsby";
import facebookIcon from "../images/icons/facebook.svg";
import githubIcon from "../images/icons/github.svg";
import instagramIcon from "../images/icons/instagram.svg";

import {
  footer,
  icon,
  icons,
  paddingMarginZero,
} from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <h4 className={paddingMarginZero}>@2022 Wiktor Rudzki</h4>
      <div className={paddingMarginZero}>LOGO</div>
      <ul className={icons}>
        <Link to="https://www.facebook.com/wiktor.rudzki.73" target="_blank">
          <li>
            <img
              className={`${icon} ${paddingMarginZero}`}
              src={facebookIcon}
              alt="Find me on Facebook!"
            />
          </li>
        </Link>
        <Link to="https://github.com/wiktorrudzki" target="_blank">
          <li>
            <img
              className={`${icon} ${paddingMarginZero}`}
              src={githubIcon}
              alt="Find me on GitHub!"
            />
          </li>
        </Link>
        <Link to="https://www.instagram.com/wiktor.rudzki/" target="_blank">
          <li>
            <img
              className={`${icon} ${paddingMarginZero}`}
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
