import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(236, 235, 232, 0.50) 16.09%, #FFFDF8 100%)',
        'body-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(236, 235, 232, 0.50) 46%, #FFFDF8 100%)',
        'black-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)',
      },
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        loop: 'loop var(--duration) linear infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: {
          100: "#ED7534",
        },
        secondary: {
          100: "#FEF8E9",
          200: "#ffe9b8",
        },
        light: "#FFFDF8",
        dark: "#171715",
        alabaster: "#EEEAE7",
        beige: "#F8F4DE",
        palePink: "#FADFD6",
        transparent:{
          100: '#FFFFFF73',
          200: '#ffffffa9',
          300: '#ffffffd3'
        },
      },
      fontFamily: {
        head: ["Edensor", "sans-serif"],
        body: ["League Spartan", "sans-serif"]
      },
      opacity: {
        "15": ".15"
      },
      mixBlendMode: {
        'multiply': 'multiply',
        'screen': 'screen',
        'overlay': 'overlay',
        'darken': 'darken',
        'lighten': 'lighten',
        'color-dodge': 'color-dodge',
        'color-burn': 'color-burn',
        'hard-light': 'hard-light',
        'soft-light': 'soft-light',
        'difference': 'difference',
        'exclusion': 'exclusion',
        'hue': 'hue',
        'saturation': 'saturation',
        'color': 'color',
        'luminosity': 'luminosity',
      }
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
