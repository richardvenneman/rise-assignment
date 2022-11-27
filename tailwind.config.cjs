/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'rise': {
        'grayscale': {
          white: '#FFFFFF',
          gray30: '#F7F7FC',
          gray400: '#BDBFC5',
          gray600: '#848793',
        },
        positive: '#19BE2F',
        primary: '#7161EC',
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '0.6875rem',
      s: '0.8125rem',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}
