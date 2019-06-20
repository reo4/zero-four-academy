const additionaUnits = {
  '.25': '.0625rem',
  '.5': '.125rem',
  '72': '18rem',
  '80': '20rem',
  '88': '22rem',
  '96': '24rem',
  '100': '30rem',
  '128': '32rem',
  '236': '40rem'
}
module.exports = {
  important: true,
  theme: {
    container: {
      center: true,
      padding: 24
    },
    extend: {
      fontFamily: {
        'sans': ['Lato', 'Roboto', 'Cairo']
      },
      colors: {
        red: '#ff0000',
        grey: {
          light: '#959595',
          normal: '#262626',
          balanced: '#8F8F8F',
          '500': '#272728',
          '600': '#575757',
          '700': '#E9E9E9',
          '800': '#565656',
          dark: '#151516'
        },
        lactic: '#46cfec',
        green: '#00ffa0',
        'green-offer': '#77B15C'

      },
      margin: additionaUnits,
      padding: additionaUnits,
      width: additionaUnits,
      minWidth: additionaUnits,
      fontSize: {
        '2xs': '.5rem',
        '3xs': '.25rem',
      }
    },
    screens: {
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
      'o-xl': { 'max': '1280px', 'min': '1024px' },
      'o-lg': { 'max': '1024px', 'min': '768px' },
      'o-md': { 'max': '768px', 'min': '640px' },
      'o-sm': { 'max': '640px', },
    }
  },
  variants: {
    textColor: ['children', 'responsive', 'hover', 'focus'],
    margin: ['children', 'first-child', 'last-child', 'responsive'],
    width: ['children', 'first-child', 'last-child', 'responsive']
  },
  plugins: [
    require('tailwindcss-children')(),
  ]
}
