const additionaUnits = {
  '.25': '.0625rem',
  '.5': '.125rem',
  '72': '18rem',
  '80': '20rem',
  '88': '22rem',
  '96': '24rem',
  '128': '32rem',
  '144': '36rem',
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
	    colors: {
	      'white': '#ffffff',
	      red: '#ff0000',
        'red-light': '#FF4A56',
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
	      'green-offer': '#77B15C',
        'purple': '#754da5'
	    },
      fontFamily: {
        'sans': ['Lato', 'Roboto', 'Cairo']
      },
      margin: additionaUnits,
      padding: additionaUnits,
      width: additionaUnits,
      minWidth: additionaUnits,
      fontSize: {
        '2xs': '.5rem',
        '3xs': '.25rem',
      }
    }
  }
}
