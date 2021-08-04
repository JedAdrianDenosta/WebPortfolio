module.exports = {
  purge: {
    mode: "jit",
    mode: 'layers',
    layers: ['base','components', 'utilities'],
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cwc:{
          red:'#E84977',
          blue:'#49AADE',
          gray:'#222222',
        }
        
      },
      fontFamily: {
        body: ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
