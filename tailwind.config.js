/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0A192F",
        "light-blue": "#1E2A47",
        "light-gray": "#F5F5F5",
        "light-red": "#FF4A4A",
        "light-green": "#00FFA3",
      },
      fontFamily: {
        poppings: [ 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}