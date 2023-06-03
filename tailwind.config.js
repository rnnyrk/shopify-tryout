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
          50: '#f3f8fc',
          100: '#e6f1f8',
          200: '#c6e2f1',
          300: '#9fd0e7',
          400: '#5cafd4',
          500: '#3796c0',
          600: '#2778a2',
          700: '#206084',
          800: '#1e526e',
          900: '#1e455c',
          950: '#142d3d',
        },
        background: {
          main: '#FFF0E0',
          hover: '#D6D5C3',
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
