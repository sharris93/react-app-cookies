import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en_US from './en_US.json'
import es_ES from './es_ES.json'
import de_DE from './de_DE.json'

i18n
  .use(LanguageDetector) // automatically detects browser language
  .use(initReactI18next)
  .init({
    resources: {
      en_US: { translation: en_US },
      es_ES: { translation: es_ES },
      de_DE: { translation: de_DE },
    },
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false },
  })

export default i18n
