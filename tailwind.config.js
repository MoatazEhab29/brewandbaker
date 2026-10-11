/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#FAF4E9',
          200: '#F3E9D2',
          300: '#EBDBBE',
        },
        espresso: {
          400: '#8B6B52',
          500: '#6B4E3D',
          600: '#5A3E2E',
          700: '#4A3324',
          800: '#3A2619',
          900: '#2A1A0E',
        },
        caramel: {
          300: '#E0B97C',
          400: '#D4A45A',
          500: '#C68E42',
          600: '#B07535',
          700: '#945C28',
        },
        sage: {
          300: '#B8C5A8',
          400: '#9AAB87',
          500: '#7E9167',
          600: '#66795240',
          700: '#5C6E4C',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'steam': {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-8px) scaleY(1.15)' },
        },
        'gentle-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'steam': 'steam 2.5s ease-in-out infinite',
        'gentle-bob': 'gentle-bob 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
