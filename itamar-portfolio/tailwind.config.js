/** @type {import('tailwindcss').Config} */

/* 
Breakpoints Tailwind CSS (Desktop-First):
  
Mobile:   max-xs (≤479px) | max-sm (≤639px)
Tablet:   max-md (≤767px) | max-lg (≤1023px)
Desktop:  max-xl (≤1279px) | max-2xl (≤1535px) | max-3xl (≤1919px)
                
Uso: Classes sem prefixo = desktop padrão Classes max-* = ajustes para telas menores
*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs':  '480px', 
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      screens: {
        'max-3xl': { max: '1919px' },
        'max-2xl': { max: '1535px' },
        'max-xl':  { max: '1279px' },
        'max-lg':  { max: '1023px' },
        'max-md':  { max: '767px' },
        'max-sm':  { max: '639px' },
        'max-xs':  { max: '479px' },
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
};