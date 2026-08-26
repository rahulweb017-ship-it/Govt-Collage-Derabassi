/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF5',
          100: '#C5D0E6',
          200: '#9BAFD4',
          300: '#708EC2',
          400: '#4A6FA8',
          500: '#1B3A6B',
          600: '#152E55',
          700: '#0C1D3F',
          800: '#081429',
          900: '#040A14',
        },
        saffron: {
          50: '#FEF3EC',
          100: '#FDE1CE',
          200: '#F9BFA0',
          300: '#F49D71',
          400: '#E07A42',
          500: '#C75B2A',
          600: '#A84820',
          700: '#8A3819',
          800: '#6B2B13',
          900: '#4D1E0D',
        },
        ivory: {
          50: '#FFFCF8',
          100: '#FFF9F2',
          200: '#FFF5E8',
          300: '#FFEFD8',
          400: '#FFE8C8',
          500: '#F5DFC0',
        },
        cream: '#FAFAF7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        gurmukhi: ['Noto Sans Gurmukhi', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'phulkari-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C75B2A' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
