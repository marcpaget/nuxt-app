module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        permanentmarker: ['Permanent Marker', 'cursive']
        },
      colors: {
        'kaldi': '#ff0000',
      },
      textColor: {
        'kaldi': '#ff0000',
      }
    },
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [require('tw-elements/dist/plugin')],
}

