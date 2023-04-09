const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#2B2F32',
        secondary: '#23272A',
        gray: colors.zinc,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
