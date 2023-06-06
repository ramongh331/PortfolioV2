/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
      },
      colors: {
        yellow: {
          1000: '#E5B538'
        } 
      }
    },
  },
  plugins: [],
};
