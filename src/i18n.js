import { initReactI18next } from "react-i18next";
import translationEN from "@locales/en/translationEN.json";
import translationPL from "@locales/pl/translationPL.json";
import i18next from "i18next";

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("lang") ? localStorage.getItem("lang") : "pl"}`,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
