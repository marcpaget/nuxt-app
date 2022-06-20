import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@heroicons/vue'],
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
],
prismic: {
  endpoint: 'marcsnuxt'
},
buildModules: [
  // pinia plugin - https://pinia.esm.dev
  '@pinia/nuxt',
  'unplugin-icons/nuxt',
],
vite: {
  logLevel: "info",
  optimizeDeps: {
      include: [
          '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'pinia', 'ufo',
      ]
  }
}
})
