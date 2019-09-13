const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
  { countryCode: 'ES', languageTag: 'es-ES', languageCode: 'es', isRTL: false }
]

const findBestAvailableLanguage = () => ({ languageTag: 'es-ES', isRTL: false })

const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ','
})

const getCalendar = () => 'gregorian'
const getCountry = () => 'ES'
const getCurrencies = () => []
const getTemperatureUnit = () => 'celsius'
const getTimeZone = () => 'Europe/Madrid'
const uses24HourClock = () => true
const usesMetricSystem = () => true

const addEventListener = jest.fn()
const removeEventListener = jest.fn()

export const mockReactNativeLocalize = {
  findBestAvailableLanguage,
  getLocales,
  getNumberFormatSettings,
  getCalendar,
  getCountry,
  getCurrencies,
  getTemperatureUnit,
  getTimeZone,
  uses24HourClock,
  usesMetricSystem,
  addEventListener,
  removeEventListener
}
