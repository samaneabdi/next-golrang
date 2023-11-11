import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        'filter-txt-gray':'#8186ad',
        'filter-item-gray':'#404040',
        'footer-border':'rgba(47, 47, 48, 0.1)',
        'footer-bg':'rgba(241, 244, 255, 0.33)',
        'filter-box':'rgba(255, 255, 255, 0.7)',
        'blue':'#466dfa',
        'gray':'rgba(47, 47, 48, 0.6)',
        'white':'#ffffff',
        'black':'#2f2f30',
        'light-blue':'#f1f4ff'
      },
      direction: {
        rtl: 'rtl',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
export default config
