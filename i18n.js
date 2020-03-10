const NextI18Next = require("next-i18next").default;
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

// const options = {
//   localeSubpaths: true
// };

// const localeSubpathVariations = {
//   none: {},
//   foreign: {
//     fr: "fr"
//   },
//   all: {
//     en: "en",
//     fr: "fr"
//   }
// };

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr", "de", "may"],
  localeSubpaths: {
    fr: "fr",
    en: "en",
    de: "de",
    may: "may"
  },
  // serverLanguageDetection = false ---> will disable the cache to save in the cookies for the first load and for the other refereshes
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  detection: {
    order: ["querystring", "cookie", "path", "navigator"]
  }
});
