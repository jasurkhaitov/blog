/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'x310': '310px',

      'x350': '350px',

      'xs': '400px',

      'x450': '450px',

      'xls': '500px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },

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
        secondary: '#aaa6c3'
      },

      backgroundImage : {
        headerBackground : "url('./assets/img/background.jpg')",
      },

    },
  },
  plugins: [],
} 