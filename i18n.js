/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const options = {
  localeSubpaths: true
};

const localeSubpathVariations = {
  none: {},
  foreign: {
    fr: "fr"
  },
  all: {
    en: "en",
    fr: "fr"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr", "de"],
  localeSubpaths: {
    fr: "fr",
    en: "en",
    de: "de"
  },
  // serverLanguageDetection = false ---> will disable the cache to save in the cookies for the first load and for the other refereshes
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  detection: {
    order: ['path', 'navigator']
  }
});

// import NextI18Next from 'next-i18next'

// const options = new NextI18Next({ localeSubpaths: true })
// export default new NextI18Next(options)
