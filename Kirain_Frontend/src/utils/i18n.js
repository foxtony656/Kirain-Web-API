import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

// import { resources } from "translations";

// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
// pass the i18n instance to react-i18next.
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options


function handleMissingKey(lng, ns, key, fallbackValue) {
  // console.log('handling', lng, ns, key, fallbackValue)
}

i18n
  // .use(LanguageDetector)
  // .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    // debug: true,
    // saveMissing: true,
    // missingKeyHandler: handleMissingKey,

    load: 'languageOnly',
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    },
  })


export default i18n