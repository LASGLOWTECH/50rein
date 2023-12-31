
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {screens:{
    xs:'375px',
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },

  clipPath: {
    mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
},
    extend: {
      colors:{
        darkBlue:'#0B3C46',
        lightBlue:'#249298',
        darkestBlue:'#232f3e',
      darkerBlue:'#f4f7f2',
        orangeRed:'#F87A28',
        cyanGreen:'#eaf8fa',
        greyBlack:'#181B38',
        grey:'#fafafa'
      }
  
    },
    animation:{
      'spin-slow':'spin 20s linear infinite',
    }

  },


  plugins: [require('flowbite/plugin'),
  require('tailwind-clip-path')
  
],
 
}
