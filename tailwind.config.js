/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '25rem': '25rem',
      },
      fontSize:{
        '0.9rem' : '0.9rem',
      }
    },
  },
  plugins: [],
}

