/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'Sans - Serif'],
        inter: ['Inter', 'sans - serif']
      }
    },
  },
  plugins: [],
}
