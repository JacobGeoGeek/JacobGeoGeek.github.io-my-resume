import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en/translation.json";
import translationFR from "../locales/fr/translation.json";

const resources = {
  EN: {
    translation: translationEN,
  },
  FR: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  keySeparator: false,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
