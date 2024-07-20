export default defineNuxtConfig({
    // https://github.com/nuxt-themes/docus
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

    modules: ["@nuxthq/studio", "@nuxtjs/tailwindcss", "@nuxt/fonts"]

})