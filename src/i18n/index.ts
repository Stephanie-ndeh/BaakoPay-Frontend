import { createI18n } from "vue-i18n";
import en from "./en";
import fr from "./fr";

const savedLocale = localStorage.getItem("baakopay-locale");

const i18n = createI18n({
  legacy: false,
  locale: savedLocale === "en" || savedLocale === "fr" ? savedLocale : "fr",
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
});

export default i18n;
