import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/modules/router'
import i18n from '@/modules/i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const juriCassDarkTheme = {
  dark: true,
  colors: {
    background: '#212121',
    surface: '#212121',
    primary: '#731F1F',
    'primary-light': '#872E26',
    secondary: '#A68A56',
    'secondary-light': '#D9BC66'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'juriCassDarkTheme',
    themes: {
      juriCassDarkTheme
    }
  }
})

const app = createApp(App)
//app.use([vuetify, router])
app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount('#app')
