/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#F64C67',
        'secondary': '#FD9B5F',
        'Darkprimary': '#DC3545',
        'Darksecondary': '#1DA1F2',
        'lightcolor': '"212121',
        'secondarybutton': '#545454',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },

      keyframes:{
        'infinite-scroll':{
          from: {transform: 'translateY(0px)'},
          to: {transform: 'translateY(-50px)'}
        }
      }
    },
  },
  plugins: [],
}

