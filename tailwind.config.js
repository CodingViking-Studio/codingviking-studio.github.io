/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html","./index.html","./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'cvs-orange': '#ff5520',
        'cvs-dark': '#161616'
      },
    },
  },
  plugins: [],
}

