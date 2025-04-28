import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)'],
        heading: ['var(--font-merriweather)'],
      },
      colors: {
        primary: '#FF6B6B',
        'primary-light': '#FF8787',
      },
    },
  },
  plugins: [],
}

export default config 