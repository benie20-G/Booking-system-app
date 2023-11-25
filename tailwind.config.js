/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      sm:"600px",
      md:"780px",
      lg:"992px",
      xl:"1200px"
    },
    extend: {
      // backgroundImage:{
      //   'map':"url('./public/IMG/map.png)"
      // }
    
    },

  },
  plugins: [],
}

