
console.log('Loaded Tailwind config from /apps/frontend/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:  '#98cb50',
          orange: '#f2994a',
          blue:   '#0984e3',
          red:    '#e74c3c',
          yellow: '#f1c40f',
        },
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
