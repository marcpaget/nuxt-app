// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in', // default
        },
        layoutTransition: {
            name: 'page',
            mode: 'out-in', // default
        },
    },
    ssr: false,
    components: true,
    content: {
        documentDriven: true,
    },
    typescript: {
        strict: true,
        shim: false,
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        // '@nuxtjs/prismic',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        '@vuestic/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'unplugin-icons/nuxt',
        //'@nuxtjs/partytown',
        //'@inkline/nuxt',
        'nuxt-api-party',
        'nuxt-umami',
        '@sidebase/nuxt-session',
        '@pinia/nuxt',
        // '@nuxtjs/vuetify',
        'nuxt-viewport',
        'nuxt-swiper',
        'nuxt-headlessui',
    ],
    headlessui: {
        prefix: 'Headless',
    },
    umami: {
        autoTrack: true,
        doNotTrack: false,
        cache: false,
        domains: 'selfhosting.ninja',
        websiteId: 'bc3253eb-d82d-49dd-a290-d337841dce29',
        scriptUrl: 'https://marcs-umami-analytics.herokuapp.com/umami.js',
    },
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'],
    },
    colorMode: {
        classSuffix: '',
        // preference: 'system',
        // fallback: 'light',
    },
    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_KEY: process.env.SUPABASE_KEY,
        },
    },
    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css',
    //     configPath: 'tailwind.config.js',
    //     exposeConfig: false,
    //     config: {},
    //     injectPosition: 0,
    //     viewer: true,
    // },
    //   css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml'],
        },
    },
    vite: {
        logLevel: 'info',
        optimizeDeps: {
            include: ['@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'ufo'],
        },
    },
})
