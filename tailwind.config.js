/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bahamas: {
          50: '#f0fbfc',
          100: '#e0f7fa',
          200: '#b2ebf2',
          300: '#80deea',
          400: '#26c6da',
          500: '#00a3e0', // Core Bahamas Blue
          600: '#0088bc',
          700: '#006c96',
          800: '#005172',
          900: '#00374e',
          950: '#002131',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 163, 224, 0.3)',
        'glow-lg': '0 0 40px -5px rgba(0, 163, 224, 0.4)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
