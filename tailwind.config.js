/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#EFEBE3',
        'paper-soft': '#E6E1D6',
        ink: '#111110',
        'ink-soft': '#2A2A28',
        muted: '#5C5750',
        line: '#111110',
        accent: '#FF3B00',
        accentDark: '#C72C00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-rev': 'marqueeRev 28s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        blink: 'blink 1.1s steps(2) infinite',
        floaty: 'floaty 2.2s ease-in-out infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}