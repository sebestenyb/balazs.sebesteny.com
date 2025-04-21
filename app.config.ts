// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
    docus: {
        title: 'Balazs Sebesteny',
        description: 'Results-oriented Software Developer with 20 years of experience across the full software development lifecycle. Proven leadership in both agency and SaaS startup environments. Foster a collaborative and growth-oriented work ethic, with a passion for mentoring and knowledge sharing. Highly organised and analytical, with a demonstrated ability to quickly learn and adapt to new technologies.',
        image: 'https://avatars.githubusercontent.com/u/743212?v=4',
        socials: {
            twitter: 'sebestenyb',
            github: 'sebestenyb',
            linkedin: {
                label: 'LinkedIn',
                icon: 'uil:linkedin',
                href: 'https://linkedin.com/in/sebestenyb'
            }
        },
        github: false,
        aside: {
            level: 0,
            collapsed: false,
            exclude: []
        },
        main: {
            padded: true,
            fluid: true
        },
        header: {
            logo: true,
            showLinkIcon: true,
            exclude: [],
            fluid: true
        },
        footer: {
            credits: {
                icon: 'game-icons:beard',
                text: 'Built with by sebestenyb',
                href: '/'
            }
        }
    }
})
