import { languages } from "./languages";
import i18n from "./i18n";

export const getOppositeLanguage = (language: string): string => {
  if (language === languages.EN) {
    i18n.changeLanguage(languages.FR);
    return languages.FR;
  }

  i18n.changeLanguage(languages.EN);
  return languages.EN;
};