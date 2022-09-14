import {
  buttonContactForm,
  formContactForm,
  inputContactForm,
  labelContactForm,
  sectionContactForm,
  textContactForm,
  title,
} from "./contact.module.css";
import {
  darkestbeigeBackground,
  whitebeigeColor,
  whiteColor,
} from "@dark-mode/dark-mode.module.css";

export const contactFormStyles = {
  dark: {
    title: `${title} ${whiteColor}`,
    section: sectionContactForm,
    form: formContactForm,
    label: `${labelContactForm} ${whitebeigeColor}`,
    text: textContactForm,
    input: `${inputContactForm} ${whitebeigeColor}`,
    button: `${buttonContactForm} ${darkestbeigeBackground} ${whiteColor}`,
  },
  light: {
    title: title,
    section: sectionContactForm,
    form: formContactForm,
    label: labelContactForm,
    text: textContactForm,
    input: inputContactForm,
    button: buttonContactForm,
  },
};
