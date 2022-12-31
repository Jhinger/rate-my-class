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
      },
      animation: {
        fadeDown: 'fadeDown 0.2s ease-in-out',
        fadeDownDelay: 'fadeDown 0.35s ease-in-out'
      },
      keyframes: {
        fadeDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-2px)'
         },
         '100%': {
            opacity: 1,
            transform: 'translateY(0)'
         }
        }
      }
    },
  },
  plugins: [],
}
