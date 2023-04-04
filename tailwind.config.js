/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2F32',
        secondary: '#23272A',
        light: '#FAF9F6',
        muted: '#9E9E9E',
      },
    },
  },
  plugins: [],
};
