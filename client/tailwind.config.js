/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ED7534",
        },
        secondary: {
          100: "#FEF8E9",
          200: "#ffe9b8",
        },
        white: {
          100: "#FFFDF8"
        },
        dark: {
          100: "#171715",
          200: "#772f1a"
        }
      },
      fontFamily: {
        "head": ["Edensor", "sans-serif"],
        "body": ["League Spartan", "sans-serif"]
      },
      opacity: {
        "15": ".15"
      }
    },
  },
  plugins: [],
}