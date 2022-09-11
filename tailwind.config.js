/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        slate: colors.blueGray,
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        "background-dark": "#121212",
        menubar: "#181818",
        "secondary-text": "#B3B3B3",
        "primary-text": "#FFFFFF",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
