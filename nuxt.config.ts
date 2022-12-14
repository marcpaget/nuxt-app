// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
  content: {
    documentDriven: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    // '@nuxtjs/prismic',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image-edge', //  '@nuxtjs/algolia',
    'nuxt-meilisearch',
    '@vuestic/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'unplugin-icons/nuxt',
    '@nuxtjs/partytown',
    //'@inkline/nuxt',
    'nuxt-api-party',
    'nuxt-umami',
    '@sidebase/nuxt-session',
    '@pinia/nuxt',
    'nuxt-viewport',
    // pinia plugin - https://pinia.esm.dev
    // '@pinia/nuxt',
  ],
  umami: {
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'selfhosting.ninja',
    websiteId: 'bc3253eb-d82d-49dd-a290-d337841dce29',
    scriptUrl: 'https://marcs-umami-analytics.herokuapp.com/umami.js',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/selfhostingninja/image/upload/',
    },
    domains: ['selfhosting.ninja'],
  },
  colorMode: {
    classSuffix: '',
  },
  meilisearch: {
    hostUrl: process.env.MEILISEARCH_HOST_URL,
    apiKey: process.env.MEILISEARCH_API_KEY,
    instantSearch: {
      theme: 'algolia',
    },
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
        'vue',
        'ufo',
      ],
    },
  },
})
