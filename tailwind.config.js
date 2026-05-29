/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pulse: {
          blue: '#1D9BF0',
          black: '#0F1419',
          muted: '#536471',
          border: '#EFF3F4',
          soft: '#F7F9F9',
        },
      },
      boxShadow: {
        panel: '0 16px 40px rgba(15, 20, 25, 0.08)',
      },
    },
  },
  plugins: [],
};
