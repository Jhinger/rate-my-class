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
        secondary: "#242131",
        tertiary: "#E2AFF3"
      },
      letterSpacing: {
        tightest: '-.075em'
      },
      animation: {
        fadeDown: 'fadeDown 0.2s ease-in-out',
        fadeDownDelay: 'fadeDown 0.35s ease-in-out',
        gradient: 'gradient 20s ease-in-out infinite'
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
        },
        gradient: {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
      },
      }
    },
  },
  plugins: [],
}
