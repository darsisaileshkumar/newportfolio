/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          base: '#e0e5ec',
          light: '#ffffff',
          dark: '#a3b1c6',
          primary: '#6366f1',
          accent: '#8b5cf6',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'neo': '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
        'neo-inset': 'inset 6px 6px 10px #a3b1c6, inset -6px -6px 10px #ffffff',
        'neo-sm': '5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff',
        'neo-inset-sm': 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff',
        'neo-lg': '15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
