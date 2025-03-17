import { computed, watch } from 'vue'
import { createI18n } from 'vue-i18n'
//import { setLocale } from '@vee-validate/i18n'

// Messages
import fr from './locales/fr.json'
import en from './locales/en.json'

// i18n Object

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr-FR',
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
  globalInjection: true
})

// Export locale, availableLocales, fallbackLocale and t from i18n, watch locale value
export const { locale, availableLocales, fallbackLocale, t } = i18n.global

// Default export is i18n Object
export default i18n
