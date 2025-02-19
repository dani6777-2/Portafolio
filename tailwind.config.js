/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'typing': 'typing 1.5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark'
  plugins: [],
}