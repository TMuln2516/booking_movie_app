/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#FCC434',
        secondary: '#4D438A',
      },
      fontFamily: {
        Lato: ['Lato-Bold', 'serif'],
      },
    },
  },
  plugins: [],
};
