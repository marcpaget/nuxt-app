const defaultTheme = require("tailwindcss/defaultTheme");
const formKitTailwind = require('@formkit/themes/tailwindcss');


module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
    "./assets/**/*.css",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{html,js}",
    "./content/**/**.md",
    './formkit.config.{js,mjs,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        permanentmarker: ['Permanent Marker', 'cursive'],
      },
      colors: {
        'kaldi': '#ff0000',
      },
      textColor: {
        'kaldi': '#ff0000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
    require("daisyui"),
    require("tailwind-scrollbar"),
    formKitTailwind,
  ],
};
