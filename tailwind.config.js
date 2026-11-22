/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        signal: {
          blue: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          glow: '#60A5FA',
        },
        paper: {
          light: '#F8F7F4',
          DEFAULT: '#E8E4DD',
          dark: '#D9D4C7',
        },
        tech: {
          black: '#0A0C10',
          surface: '#11141B',
          card: '#161B24',
          border: '#232936',
          muted: '#7E8B9F',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      }
    },
  },
  plugins: [],
}
