module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0fa',
          100: '#e1e1f5',
          200: '#c4c3ee',
          300: '#a7a5e7',
          400: '#8a87e0',
          500: '#5D5CDE', // Original primary color
          600: '#4a4ab8',
          700: '#383891',
          800: '#25256a',
          900: '#121243',
        },
        // Modern color palette for modern look
        modern: {
          background: '#f8fafc',
          surface: '#ffffff',
          text: '#334155',
          'text-secondary': '#64748b',
          border: '#e2e8f0',
          accent: '#6366f1'
        },
        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          text: '#f1f5f9',
          'text-secondary': '#94a3b8',
          border: '#334155',
          accent: '#818cf8'
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}