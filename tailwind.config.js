/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f8f9fa",
        secondary: "#00377e",
        tertiary: "#001a2c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
    "hero-pattern": "url('/src/assets/whitebg.jpg'), linear-gradient(to top, rgba(211, 211, 211, 1), rgba(211, 211, 211, 0))"
},

    
    },
  },
  plugins: [],
};
