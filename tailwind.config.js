/** @type {import('tailwindcss').Config} */
export default {
//   content: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'dark-green': '#476A5F',
        'light-grey': '#737374',
        'tranparent-black': 'rgba(0,0,0,0.1)',
        'tranparent-white': 'rgba(255,255,255, 0.6)',
    },
    extend: {
        spacing: {
            'ct-space': '7.5rem',
            'main-container': '1280px'
        }
    }
  },
  plugins: [],
}

