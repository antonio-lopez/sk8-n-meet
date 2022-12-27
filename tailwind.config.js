/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        smokyBlack: '#121212',
        eerieBlack: '#212121',
        yellowGreen: '#AAD33C',
        nadeshikoPink: '#F3AECA',
        slimSilver: '#C1C1C1',
        raisinBlack: '#272727',
      },
    },
  },
  plugins: [],
};
