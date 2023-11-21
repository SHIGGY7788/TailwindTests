/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    letterSpacing: {
      widest: '.4em'
    },
    backdropBlur: {
      sm: '.075em'
    },
    extend: {},
  },
  plugins: [],
}

