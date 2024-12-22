/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9138b0',
        secondary: '#e4a4fb',
        third: '#9666b1',
        section: '#d9d9d9',
        title: '#49296a',
        col: '#8B4AA3',
      },
    },
  },
  plugins: [],
}