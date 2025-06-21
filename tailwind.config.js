/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        'ios': '0 8px 32px 0 rgba(60,60,60,0.08)',
      },
      colors: {
        'card-bg': 'var(--card-bg)',
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
        mono: [
          'var(--font-geist-mono)',
          'monospace',
        ],
      },
      backgroundImage: {
        'main-gradient': 'var(--gradient-main)',
      },
    },
  },
  plugins: [],
}; 