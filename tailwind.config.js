/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0B0C10',
        surface: '#111216',
        accent: '#00E5FF',
        neon: '#00E5FF',
        grayText: '#BFC5C9'
      },
      fontFamily: {
        inter: ['Inter','sans-serif'],
        poppins: ['Poppins','sans-serif']
      }
    }
  },
  plugins: [],
}
