/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container:{
      center: true,
      paddingTop: '16px',
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        'primary': '#FD3D57',
        // 'secondary': '#FD3D57',
      }
    },
  },
  variants:{
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [

  ],
}

