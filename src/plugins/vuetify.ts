import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export const THEME_KEY = 'gl-theme'

function initialTheme(): 'dark' | 'light' {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch { /* storage blocked */ }
  return 'dark'
}

export default createVuetify({
  theme: {
    defaultTheme: initialTheme(),
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0B0D12',
          surface: '#12151C',
          primary: '#7C9CFF',
          secondary: '#5EEAD4',
          'on-surface': '#E8EAF0',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#F7F8FB',
          surface: '#FFFFFF',
          primary: '#3B5BDB',
          secondary: '#0F9D8A',
          'on-surface': '#161A23',
        },
      },
    },
  },
})
