import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const ruangguruLightTheme = {
  dark: false,
  colors: {
    primary: '#00A5CF',           // Iconic Ruangguru Turquoise/Cyan
    'primary-darken': '#007AA3',
    'primary-lighten': '#E0F7FA',
    secondary: '#0C2340',         // Ruangguru Deep Navy
    'secondary-lighten': '#1E3A8A',
    accent: '#FF9E00',            // Ruangguru Bright Orange/Gold
    'accent-lighten': '#FFF3E0',
    background: '#F8FAFC',        // Slate-50 clean background
    surface: '#FFFFFF',
    'surface-variant': '#F1F5F9',
    'on-surface-variant': '#64748B',
    success: '#10B981',
    info: '#0284C7',
    warning: '#F59E0B',
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
    defaultTheme: 'ruangguruLightTheme',
    themes: {
      ruangguruLightTheme,
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
