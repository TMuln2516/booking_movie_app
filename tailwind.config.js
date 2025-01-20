/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#1C1A29',
        primary: '#2F2C44',
        secondary: '#4D438A',
        accent: '#867AD2',
      },
    },
  },
  plugins: [],
}

