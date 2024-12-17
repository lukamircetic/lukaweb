/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#282424",
        secondary: "#98DFEA",
        whitetext: "#FFFEF2",
      },
    },
  },
  plugins: [],
};
