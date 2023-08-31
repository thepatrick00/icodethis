/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '',
        accent: '#008ad3',
      },
      fontFamily: {
        title: ['sans-serif'],
        body: ['sans-serif'],
      },
    },
  },
}
