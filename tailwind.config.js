const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00bcd4",
        background: "#121212",
        background2: "#1b1b1b",
        neonGreen: "#39ff14", // Neon green color
        textNeon: "#39ff14", // Neon green text color
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
