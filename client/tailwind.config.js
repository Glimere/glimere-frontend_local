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
        black: { 
          100: "#000000",
          200: "#772f1a",
         
        },
        secondary: {
          100: "#FFC588"
        },
        tertiary: {
          100: "#ffe9b8",
          200: "#fff5ee"
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