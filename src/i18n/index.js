import { createI18n } from "vue-i18n";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const i18n = createI18n({
  legacy: false, // Используем Composition API
  locale: "ru", // Язык по умолчанию
  fallbackLocale: "en", // Резервный язык
  messages: {
    ru,
    en,
    es,
    fr,
  },
  // Форматирование чисел, дат, валют
  datetimeFormats: {
    ru: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    es: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    fr: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
  },
  numberFormats: {
    ru: {
      currency: {
        style: "currency",
        currency: "RUB",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    en: {
      currency: {
        style: "currency",
        currency: "USD",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    es: {
      currency: {
        style: "currency",
        currency: "EUR",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    fr: {
      currency: {
        style: "currency",
        currency: "EUR",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
  },
});

export default i18n;
