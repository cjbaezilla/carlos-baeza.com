/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          card: '#1e1e1e',
          primary: '#1f2937',
          secondary: '#4ade80',
          accent: '#60a5fa',
          text: {
            primary: '#f3f4f6',
            secondary: '#9ca3af'
          }
        }
      },
      backgroundColor: {
        primary: '#121212',
        secondary: '#1e1e1e',
        accent: '#2d3748'
      },
      textColor: {
        primary: '#f3f4f6',
        secondary: '#9ca3af',
        accent: '#60a5fa'
      }
    },
  },
  plugins: [],
}

