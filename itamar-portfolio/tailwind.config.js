/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oak Sans', 'sans-serif'],
      },
      colors: {
        base: '#2e2e2e',
        muted: '#52525b',
        border: '#545454',
      },
      
    },
  },
  plugins: [],
}