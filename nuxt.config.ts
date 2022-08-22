import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@heroicons/vue'],
  },
  content: {
    documentDriven: true
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  },
components: true,
plugins: [],
modules: [
  '@nuxt/content',
  '@nuxtjs/tailwindcss',
  '@formkit/nuxt',
  '@nuxtjs/prismic',
  '@vueuse/nuxt',
  '@nuxtjs/supabase',
  '@nuxt/image-edge',
  'vue-plausible',
  //'@inkline/nuxt',
], /*
inkline: {
  // Plugin options (optional)
}, */
prismic: {
  endpoint: 'marcsnuxt'
},
plausible: {
  domain: process.env.PLAUSIBLE_DOMAIN
},
publicRuntimeConfig: {
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN,
    apiHost: process.env.PLAUSIBLE_API_HOST
  }
},
buildModules: [
  // pinia plugin - https://pinia.esm.dev
 // '@pinia/nuxt',
  'unplugin-icons/nuxt',
  'vue-plausible'
],
nitro: {
  prerender: {
    routes: ['/sitemap.xml']
  }
},
vite: {
  logLevel: "info",
  optimizeDeps: {
      include: [
          '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', /*'pinia',*/ 'ufo',
      ]
  }
}
})
