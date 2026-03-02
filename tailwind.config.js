/** @type {import('tailwindcss').Config} */
module.exports = {
  // Check these paths carefully!
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // If using Expo Router
    "./components/**/*.{js,jsx,ts,tsx}", // For your UI components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
      },
    },
  },
  plugins: [],
};
