/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0a0a0a',
          card: '#111111',
          hover: '#1a1a1a',
          green: '#00ff41',
          cyan: '#00d4ff',
          text: '#b0b0b0',
          dim: '#3a3a3a',
          white: '#e0e0e0',
          red: '#ff3333',
          yellow: '#ffcc00',
          muted: '#555555',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 4px rgba(0,255,65,0.3)' },
          '50%': { textShadow: '0 0 12px rgba(0,255,65,0.6)' },
        },
        slideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(2) infinite',
        scanline: 'scanline 8s linear infinite',
        typing: 'typing 1.5s steps(30) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}