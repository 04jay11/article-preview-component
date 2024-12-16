/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-grayish-blue": "hsl(217, 19%, 35%)",
        "dark-blue": "hsl(214, 17%, 51%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },

      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
};
