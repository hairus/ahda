/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0.5px 0 5px rgba(0, 0, 0, 0.3)', // Define custom shadow here
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], 
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}