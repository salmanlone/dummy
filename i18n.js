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
    de: "de"
  },
  all: {
    en: "en",
    de: "de"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr"],
  localeSubpaths: {
    fr: "fr",
    en: "en"
  }
});

// import NextI18Next from 'next-i18next'

// const options = new NextI18Next({ localeSubpaths: true })
// export default new NextI18Next(options)
