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
          },
          border: 'rgba(255, 255, 255, 0.1)'
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
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-rotate': 'float-rotate 10s ease-in-out infinite',
        'block-float': 'block-float var(--duration) ease-in-out infinite',
        'grid-perspective': 'grid-perspective 25s linear infinite',
        'float-mini': 'float-mini 3s infinite ease-in-out alternate',
        'cube-rotate': 'cube-rotate var(--cube-duration, 15s) infinite linear',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-8px) translateX(8px)' },
          '50%': { transform: 'translateY(0) translateX(0)' },
          '75%': { transform: 'translateY(8px) translateX(-8px)' },
        },
        'float-rotate': {
          '0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-15px) rotate(90deg) scale(1.05)' },
          '50%': { transform: 'translateY(0) rotate(180deg) scale(1)' },
          '75%': { transform: 'translateY(15px) rotate(270deg) scale(0.95)' },
          '100%': { transform: 'translateY(0) rotate(360deg) scale(1)' },
        },
        'block-float': {
          '0%': { transform: 'translateX(var(--x)) translateY(0) rotate(var(--rotate)) scale(1)', boxShadow: 'inset 0 0 15px rgba(80, 120, 255, 0.1), 0 0 20px rgba(80, 130, 255, 0.05)' },
          '25%': { transform: 'translateX(calc(var(--x) + 20px)) translateY(-20px) rotate(calc(var(--rotate) + 5deg)) scale(1.02)', boxShadow: 'inset 0 0 20px rgba(80, 120, 255, 0.15), 0 0 25px rgba(80, 130, 255, 0.1)' },
          '50%': { transform: 'translateX(calc(var(--x) + 10px)) translateY(-40px) rotate(calc(var(--rotate) + 0deg)) scale(1)', boxShadow: 'inset 0 0 15px rgba(80, 120, 255, 0.1), 0 0 20px rgba(80, 130, 255, 0.05)' },
          '75%': { transform: 'translateX(calc(var(--x) - 20px)) translateY(-20px) rotate(calc(var(--rotate) - 5deg)) scale(0.98)', boxShadow: 'inset 0 0 10px rgba(80, 120, 255, 0.05), 0 0 15px rgba(80, 130, 255, 0.03)' },
          '100%': { transform: 'translateX(var(--x)) translateY(0) rotate(var(--rotate)) scale(1)', boxShadow: 'inset 0 0 15px rgba(80, 120, 255, 0.1), 0 0 20px rgba(80, 130, 255, 0.05)' },
        },
        'grid-perspective': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        'float-mini': {
          'from': { transform: 'translateX(-50%) rotate(45deg) translateY(0)', boxShadow: 'inset 0 0 5px rgba(59, 130, 246, 0.3), 0 0 5px rgba(59, 130, 246, 0.3)' },
          'to': { transform: 'translateX(-50%) rotate(45deg) translateY(-5px)', boxShadow: 'inset 0 0 8px rgba(79, 70, 229, 0.4), 0 0 8px rgba(79, 70, 229, 0.4)' },
        },
        'cube-rotate': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '25%': { transform: 'rotateX(90deg) rotateY(45deg) rotateZ(180deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(90deg) rotateZ(360deg)' },
          '75%': { transform: 'rotateX(270deg) rotateY(135deg) rotateZ(180deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(180deg) rotateZ(0deg)' },
        },
      },
    },
  },
  plugins: [],
}

