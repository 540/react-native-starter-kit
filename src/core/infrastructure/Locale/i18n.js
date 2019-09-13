import i18nJs from 'i18n-js'
import { findBestAvailableLanguage, getLocales } from 'react-native-localize'
import { es } from '../../../../locales/es'

export const i18n = {
  init: async () => {
    i18nJs.fallbacks = true
    i18nJs.translations = { es }
    i18nJs.defaultLocale = 'es'

    const locale = findBestAvailableLanguage(getLocales().map(l => l.languageTag))
    const language = languageForLocale(locale.languageTag)

    i18nJs.locale = language.code
  },
  locale: () => i18nJs.locale,
  translate: (scope, options) => i18nJs.translate(scope, options)
}

const buildLanguage = (code, includedLocales) => ({
  code,
  includedLocales
})

export const Languages = {
  es: buildLanguage('es', ['es', 'ca', 'gl'])
}

export const languageForLocale = locale => {
  const languageCode =
    Object.keys(Languages).find(code => Languages[code].includedLocales.includes(locale.substr(0, 2))) || 'es'

  return Languages[languageCode]
}
