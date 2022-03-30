const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
      backdropFilter: {
        modal: "20px",
      },
    },
    colors: {
      yellow: "#FFD841",
      darkGreen: "#0D7263",
      white: "#FFFFFF",
      darkGrey: "#242424",
      mint: "#61BAAC",
    },
    backdropFilter: {
      blur: "blur(20px)",
    },
    borderRadius: {
      large: "65px",
      small: "50px",
      full: "9999px",
    },
    fontFamily: {
      body: "Montserrat, sans-serif",
    },
  },
  plugins: [],
};
