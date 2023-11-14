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
        'green':'#7AE311',
        'white-opacity':'rgba(255, 255, 255, 0.10)',
        'blue-color':'#16BEF2',
        'orange-color':'#FFB800',
        
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
