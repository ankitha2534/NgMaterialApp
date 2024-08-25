/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '25rem': '25rem',
        '410px' : '410px',
      },
      fontSize:{
        '0.9rem' : '0.9rem',
        '1.3rem' : '1.3rem',
      },
      fontWeight:{
        '500':'500px',
      },
      borderRadius:{
        '0px' : '0px',
        '50%':'50%',
      },
      colors:{
        'border-gray':'#BBB9B9',
      },
      borderWidth:{
        '1px' : '1px',
      },
      boxShadow:{
        'profile':' 0 5px 25px #0003',
      },
      translate:{
        '-1/2':'-50%',
      },
      zIndex:{
        '1':'1',
        '2':'2',
      },
      backgroundColor:{
        '#ffffff80':'#ffffff80',
        '#F0F2F6' : '#F0F2F6',
      },
      textColor:{
        '#888b99' : '#888b99',
        '#1a202e' : '#1a202e',
      },
      padding:{
        '0.8rem' : '0.8rem',
        '1.8rem' : '1.8rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

