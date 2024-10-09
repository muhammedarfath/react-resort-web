/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        sansy: ['Inter', 'sans-serif'],
        'custom': ["Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']


      },
    },
  },
  plugins: [],
}
