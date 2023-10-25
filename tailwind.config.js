/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        sm: '15px',
        lg: '30px'
      }
    },

    extend: {

      fontFamily: {
        dm: ["'Inter', sans-serif "]
      },

      colors: {
        Pyellow: '#fec544',
        PblackColor: '#070d1b',
        FmodalBackgroundColor : 'rgba(0, 0, 0, 0.6)',
      },

      backgroundImage : {
        headerBackground : "url('./assets/img/background.jpg')",
      },

    },
  },
  plugins: [],
} 