/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: "435px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
