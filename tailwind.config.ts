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

        'lime-primary':'var(--lime-500)',
        'cyan':'var(--cyan-400)',
        'white':'var(--white)',
        'yellow-primary':'var(--yellow-500)',
        'red':'var(--red-400)',
        'black':'var(--black)',
        'red-primary':'var(--red-600)',
        'white-opacity':'rgba(255, 255, 255, 0.10)',
        'green':'#7AE311',
        'stone':'#CACACA',
        'red-secondry':'#C45555'
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
