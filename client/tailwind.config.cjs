/** @type {import('tailwindcss').Config} */
// tailwind setup: npx tailwindcss init -p
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
      }
    },
  },
  plugins: [],
}
