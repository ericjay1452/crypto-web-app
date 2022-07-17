/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        "300" : "15%",
         "500" : "90%",
         "600" : "30em"
      },
    },
  },
  plugins: [],
}

