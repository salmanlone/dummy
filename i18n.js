/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr"],
  localeSubpaths: {
    fr: "fr",
    en: "en"
  },
  // serverLanguageDetection = false ---> will disable the cache to save in the cookies for the first load and for the other refereshes
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  detection: {
    order: ['path', 'navigator']
  }
});
