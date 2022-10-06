import { initReactI18next } from "react-i18next";
import translationPL from "@locales/pl/translation.json";
import i18next from "i18next";

const resources = {
  pl: {
    translation: translationPL,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
