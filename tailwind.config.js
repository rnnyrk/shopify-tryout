/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-nunito-sans)'],
      },
      colors: {
        primary: {
          50: '#f0f9f2',
          100: '#daf1de',
          200: '#c5e7cd',
          300: '#89cc9d',
          400: '#58af75',
          500: '#369358',
          600: '#267545',
          700: '#1e5e39',
          800: '#1a4b2e',
          900: '#163e27',
          950: '#0c2216',
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
        background: {
          main: '#FFF0E0',
          hover: '#D6D5C3',
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
