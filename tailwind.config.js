const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#FFD841",
      darkGreen: "#0D7263",
      white: "#FFFFFF",
      darkGrey: "#242424",
    },
    backdropFilter: {
      blur: "blur(20px)",
    },
    borderRadius: {
      "4xl": "65px",
      full: "9999px",
    },
  },
  plugins: [],
};
