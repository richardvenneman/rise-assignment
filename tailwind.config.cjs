/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        rise: {
          grayscale: {
            white: "#FFFFFF",
            gray30: "#F7F7FC",
            gray50: "#F1F2F8",
            gray400: "#BDBFC5",
            gray600: "#848793",
          },
          positive: "#19BE2F",
          primary: "#7161EC",
        },
      },
      dropShadow: {
        "elevation-400": [
          "0px 20px 30px rgba(0, 0, 0, 0.1)",
          "0px 2px 8px rgba(0, 0, 0, 0.2)",
        ],
      },
      fontSize: {
        xxs: "0.6875rem",
        s: "0.8125rem",
      },
    },
  },
  plugins: [],
};
