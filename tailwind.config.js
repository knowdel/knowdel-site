/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー（ブランド軸）
        brand: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#45101a',
          DEFAULT: '#45101a',
          dark: '#5c1a26',
        },
        // サブカラー（アクセント）
        accent: {
          gold: '#c9a646',
          'blue-gray': '#2e3a48',
        },
        // ベースカラー（背景・本文）
        base: {
          white: '#fdfdfd',
          'light-gray': '#f4f4f4',
        },
        // テキストカラー
        text: {
          dark: '#333333',
          'brand-dark': '#5c1a26',
        },
        // 補助カラー（アラート・通知など）
        status: {
          success: '#2e7d32',
          warning: '#f9a825',
          error: '#c62828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
