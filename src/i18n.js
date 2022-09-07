import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEN from "./locales/en/translationEN.json";
import translationPL from "./locales/pl/translationPL.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
