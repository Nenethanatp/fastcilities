/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        oldPeach: '#E1665E',
        peach: '#EB8078',
        oldGreenSky: '#228573',
        greenSky: '#2B8C7B',
        grayNav: '#414141',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
