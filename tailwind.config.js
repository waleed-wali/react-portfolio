/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        surfaceHover: '#1e1e1e',
        primary: '#3b82f6', // blue-500
        primaryHover: '#2563eb', // blue-600
        textMain: '#f3f4f6', // gray-100
        textMuted: '#9ca3af', // gray-400
        textDark: '#4b5563', // gray-600
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
