/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-1': '#BED7DC', // background color
        'custom-2': '#F1EEDC', // input background
        'custom-3': '#C7B7A3', // button and links
        'custom-4': '#F1F1F1', // container background
      },
    },
  },
  plugins: [],
}
