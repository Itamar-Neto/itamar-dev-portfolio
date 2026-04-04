/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs':  '480px', 
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        sans: ['Oak Sans', 'sans-serif'],
      },
      colors: {
        base: '#2e2e2e',
        muted: '#52525b',
        border: '#545454',
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}