const defaultTheme = require("tailwindcss/defaultTheme");

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
    "./node_modules/flowbite/**/*.js"
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
    require('flowbite/plugin'),
  ],
};
