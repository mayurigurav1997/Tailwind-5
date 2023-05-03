/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*"],

  theme: {
    screens: {
      'xsm': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        13: '3.2rem'
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }]
      },

    },
    plugins: [],
  }

}