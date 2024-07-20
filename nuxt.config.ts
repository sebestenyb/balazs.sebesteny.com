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
            apiKey: '624e309899621114dfd5eb224cbe2c21',
            enabledReleaseStages: ['production'],
            releaseStage: process.env.NODE_ENV,
            appVersion: 'v0.0',      
        }
    }
    modules: [
        "@nuxthq/studio",
        "@nuxtjs/tailwindcss",
        "@nuxt/fonts",
        "nuxt-gtag",
        "nuxt-bugsnag"
    ]

})