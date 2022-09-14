import {
  imgContactDetails,
  liContactDetails,
  linkContactDetails,
  sectionContactDetails,
  title,
  ulContactDetails,
} from "./contact.module.css";
import {
  whitebeigeColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const contactDetailsStyles = {
  dark: {
    title: `${title} ${whiteColor}`,
    section: sectionContactDetails,
    ul: ulContactDetails,
    li: `${liContactDetails} ${whitebeigeColor}`,
    img: imgContactDetails,
    link: `${linkContactDetails} ${whitebeigeColor}`,
  },
  light: {
    title: title,
    section: sectionContactDetails,
    ul: ulContactDetails,
    li: liContactDetails,
    img: imgContactDetails,
    link: linkContactDetails,
  },
};
