import { computed, watch } from 'vue'
import { createI18n } from 'vue-i18n'
//import { setLocale } from '@vee-validate/i18n'

// Messages
import fr from './messages/fr.json'
import en from './messages/en.json'

// import frValidate from '@vee-validate/i18n/dist/locale/fr.json'
// import enValidate from '@vee-validate/i18n/dist/locale/en.json'

// fr.validate = { ...frValidate.messages, ...fr.validate }
// en.validate = { ...enValidate.messages, ...en.validate }

// i18n Object
const navigatorLang =
  navigator.language.length === 2
    ? `${navigator.language}-${navigator.language === 'en' ? 'GB' : navigator.language.toUpperCase()}`
    : navigator.language

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLocale') || navigatorLang,
  fallbackLocale: 'en-GB',
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  locales: [
    { code: 'en-GB', iso: 'en-GB', name: 'English' },
    { code: 'fr-FR', iso: 'fr-FR', name: 'Français' }
  ],
  messages: {
    'fr-FR': fr,
    'en-GB': en
  },
  globalInjection: true,
  numberFormats: {
    'en-GB': {
      currency: {
        style: 'currency',
        currency: 'CAD',
        currencyDisplay: 'symbol'
      }
    },
    'fr-FR': {
      currency: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol'
      }
    }
  }
})

// Export locale, availableLocales, fallbackLocale and t from i18n, watch locale value
export const { locale, availableLocales, fallbackLocale, t } = i18n.global
//setLocale(i18n.global.locale.value.substring(0, 2))
watch(locale, () => {
  locale.value ? setLocale(locale.value.substring(0, 2)) : setLocale('en')
  localStorage.setItem('nomad.locale', locale.value ? locale.value : 'en-GB')
  if (currentUser.value) currentUser.value = { ...currentUser.value, defaultLanguage: locale.value }
})

// Flags
export const currentFlag = computed(() => flags.value[locale.value ? locale.value : 'en-GB'])
export const flags = computed(() => {
  const list = availableLocales.map(al => [al, new URL(`/src/assets/images/flags/${al}.svg`, import.meta.url).href])
  return Object.fromEntries(list)
})

// Locales names
export const currentLocaleName = computed(() => localesName.value[locale.value])
export const localesName = computed(() => {
  const list = availableLocales.map(al => [al, new Intl.DisplayNames([al], { type: 'language' }).of(al)])
  return Object.fromEntries(list)
})
export const localesTranslatedName = computed(() => ({
  'fr-FR': t('lang.french'),
  'en-GB': t('lang.english')
}))
export const localesArray = computed(() => Object.keys(localesName.value))
export const tinyLocale = computed(() => locale.value.substring(0, 2))

/**
 * Change app locale
 * @param {String} locale
 */
export const changeLocale = newLocale => (i18n.global.locale.value = newLocale)

/**
 * Locale translation for data from API
 * @param {String} string to translate
 */
export const nt = (str, defaultStr) => {
  if (str) {
    if (typeof str === 'string') return str
    if (str[locale.value]) return str[locale.value]
    else if (str[fallbackLocale.value]) return str[fallbackLocale.value]
    else if (defaultStr) return defaultStr
    else return str[Object.keys(str)[0]]
    // else return `${t('common.untranslated')}: ${str[Object.keys(str)[0]]}`
  }
  return ''
}

/**
 * Locale translation for validation
 * @param {String} string to translate
 */
export const vt = (name, fieldName, params) => {
  const messagePath = i18n.global.messages.value[locale.value].validate[name] ? `validate.${name}` : 'validate._default'
  return computed(() => {
    let msg = t(messagePath, fieldName)
    if (Array.isArray(params)) params.forEach((param, i) => (msg = msg.replace(`${i}:`, param)))
    return msg
  })
}

// Default export is i18n Object
export default i18n
