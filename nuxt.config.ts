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
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName',
        },
    },
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
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
        //'@nuxt/image-edge',
        'nuxt-headlessui',
        '@dargmuesli/nuxt-cookie-control',
        '@nuxt/devtools',
        '@tailvue/nuxt',
    ],
    extends: ['nuxt-seo-kit', '@nuxt-themes/docus'],
    headlessui: {
        prefix: 'Headless',
    },
    apiParty: {
        name: 'restcountriesapi',
    },
    umami: {
        autoTrack: true,
        doNotTrack: false,
        cache: false,
        domains: 'selfhosting.ninja',
        websiteId: '13c32209-6374-4c1d-a2d6-8fbb41c89e01',
        scriptUrl: 'https://analytics.umami.is/script.js',
    },
    // image: {
    //     domains: ['selfhosting.ninja'],
    // },
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
        fallback: 'light',
        componentName: 'ColorScheme',
    },
    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_KEY: process.env.SUPABASE_KEY,
            siteUrl: 'https://selfhosting.ninja',
            siteName: 'Selfhosting.ninja',
            siteDescription:
                'Selfhosting.ninja is a blog about selfhosting your own homelab, Home Assistant, Docker, Kubernetes and much more.',
            language: 'en-US',
            titleSeparator: '|',
            trailingSlash: true,
        },
    },
    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css',
    //     configPath: 'tailwind.config.js',
    //     exposeConfig: false,
    //     //    config: {},
    //     injectPosition: 0,
    //     viewer: true,
    // },
    css: ['~/assets/css/main.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': 'postcss-nesting',
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['vuetify', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'],
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
                'naive-ui',
                'vueuc',
                'date-fns-tz/esm/formatInTimeZone',
            ],
        },
    },
})
