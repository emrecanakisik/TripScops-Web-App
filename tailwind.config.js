/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff8f5',
          100: '#ffefe8',
          200: '#ffddd0',
          300: '#ffcab5',
          400: '#ffb699',
          500: '#ff9e78',
        },
        mint: {
          50: '#f2fcf7',
        },
        navy: {
          800: '#1a1f3d',
          900: '#0f1329',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}