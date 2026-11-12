/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9B1D30', // Vintage Burgundy (Main Primary)
          dark: '#800020',    // Burgundy
          light: '#B0303C',   // Wine Red
        },
        burgundy: {
          DEFAULT: '#9B1D30',
          50: '#FDF2F4',
          100: '#F9DDE2',
          600: '#B0303C',
          700: '#9B1D30',
          800: '#800020',
          900: '#540015',
        },
        wine: '#B0303C',
        cream: {
          50: '#FFFAF0',
          100: '#FFF5E1', // Cream
          200: '#F7ECD4', // Ivory Cream
          300: '#EFE2C6', // Soft Cream
        },
        butter: {
          DEFAULT: '#F7ECD4', // Ivory Cream
          50: '#FFF5E1',
          100: '#F7ECD4',
          200: '#EFE2C6',
        },
        cocoa: {
          DEFAULT: '#4A3F35', // Roasted Cocoa
          light: '#786E64', // Muted Clay
          dark: '#2C1810',
        },
        yuzu: {
          DEFAULT: '#9B1D30', // Vintage Burgundy
          light: '#B0303C',
          dark: '#800020',
        },
        matcha: {
          DEFAULT: '#8FA882', // Pistachio Mint
          light: '#AEC2A4',
          dark: '#738C66',
        },
        charcoal: {
          light: '#786E64',
          DEFAULT: '#4A3F35',
          dark: '#2C1810',
        },
        wood: {
          light: '#EFE2C6',
          DEFAULT: '#C9A887',
          dark: '#800020',
        },
        terracotta: '#9B1D30',
        warmgold: '#D4A373'
      },
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
        serif: ['"Noto Serif Thai"', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(74, 63, 53, 0.04)',
        'warm': '0 12px 35px rgba(233, 138, 87, 0.08)',
        'card': '0 4px 20px rgba(74, 63, 53, 0.03)',
        'paper': '0 4px 20px rgba(74, 63, 53, 0.04)',
      }
    },
  },
  plugins: [],
}
