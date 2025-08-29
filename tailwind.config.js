/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // for plain HTML
    "./src/**/*.{js,ts,jsx,tsx}",  // for React / Vite
  ],
  theme: {
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1180px"
    },
    extend: {},
      container:{
        center:true,
        padding:{
          DEFAULT:"12px",
          md:"320px"
        }
      } // you can add custom colors, fonts, etc. here
  },
  plugins: [],
}
