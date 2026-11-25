import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const wordishLightTheme = {
  dark: false,
  colors: {
    primary: '#1952A5',           // Authentic Wordish Royal Blue
    'primary-darken': '#103E80',
    'primary-lighten': '#EBF2FC',
    secondary: '#0F2C59',         // Deep Navy Blue
    'secondary-lighten': '#1E4E9E',
    accent: '#FF6E02',            // Exact Wordish CTA Orange
    'accent-darken': '#D95C00',
    'accent-lighten': '#FFF0E5',
    background: '#F8FAFC',        // Clean slate-50
    surface: '#FFFFFF',
    'surface-variant': '#F1F5F9',
    'on-surface-variant': '#64748B',
    success: '#10B981',
    info: '#0284C7',
    warning: '#FF6E02',
    error: '#EF4444',
  },
  variables: {
    'border-color': '#E2E8F0',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.9,
    'medium-emphasis-opacity': 0.7,
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'wordishLightTheme',
    themes: {
      wordishLightTheme,
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      elevation: 0,
    },
    VCard: {
      rounded: 'xl',
      elevation: 0,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      rounded: 'lg',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
      rounded: 'lg',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})
