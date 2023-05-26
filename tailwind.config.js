/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          50: '#f6faf3',
          100: '#e9f5e3',
          200: '#d3eac8',
          300: '#afd89d',
          400: '#82bd69',
          500: '#61a146',
          600: '#4c8435',
          700: '#3d692c',
          800: '#345427',
          900: '#2b4522',
          950: '#13250e',
        },
        secondary: {
          50: '#eff8ff',
          100: '#dceffd',
          200: '#c0e4fd',
          300: '#95d5fb',
          400: '#63bcf7',
          500: '#359af2',
          600: '#2981e7',
          700: '#206cd5',
          800: '#2157ac',
          900: '#204b88',
          950: '#182f53',
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
