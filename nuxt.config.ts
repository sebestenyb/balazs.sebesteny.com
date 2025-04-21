export default defineNuxtConfig({
    extends: ['@nuxt-themes/docus'],
    devtools: { enabled: true },

    content: {
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark',
                sepia: 'monokai'
            },
            langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php']
        },
    },

    gtag: {
        id: 'G-D1T7EBYYH4'
    },

    bugsnag: {
        publishRelease: true,
        baseUrl: 'https://balazs.sebesteny.com',
        disableLog: true,
        config: {
            apiKey: '79f61294679990edf972a59ba9135b81',
            enabledReleaseStages: ['production'],
            releaseStage: process.env.NODE_ENV,
            appVersion: 'v0.0',
        }
    },

    site: {
        url: 'https://balazs.sebesteny.com',
        name: 'Balazs Sebesteny - Senior Laravel/VueJS Engineer',
        description: 'Results-oriented Software Developer with 20 years of experience across the full software development lifecycle.',
        defaultLocale: 'en',
    },
    modules: [
        "@nuxthq/studio",
        "@nuxt/fonts",
        "nuxt-gtag",
        "nuxt-bugsnag",
        "@nuxtjs/seo",
        "@nuxt/ui"
    ],

    compatibilityDate: '2024-07-25'
})
