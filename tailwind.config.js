/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        serif: ['var(--font-nunito-sans)'],
      },
      colors: {
        primary: {
          50: '#eff5ff',
          100: '#dbe8fe',
          200: '#c0d7fd',
          300: '#94bffc',
          400: '#609bf8',
          500: '#3d78f4',
          600: '#2758e9',
          700: '#1f44d6',
          800: '#2039ad',
          900: '#1f3589',
          950: '#182153',
        },
        secondary: {
          50: '#f7f6f9',
          100: '#edecf2',
          200: '#d9d6e1',
          300: '#b7b1c8',
          400: '#80789e',
          500: '#70688f',
          600: '#5c5376',
          700: '#4b4460',
          800: '#413b51',
          900: '#393446',
          950: '#26232e',
        },
        background: {
          primary: '#f7fafc',
          secondary: '#f7f9fc',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
