/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8C7F5",
        primaryAccent: "#82B3FD",
        secondary: "#242131"
      }
    },
  },
  plugins: [],
}
