/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins'
      },
      colors: {
        utama: '#000000',
        kedua: '#120f0e',
        ketiga: '#1b1715',
      }
    },
  },
  plugins: [],
}