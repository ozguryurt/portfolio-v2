export type Lang = 'tr' | 'en'

export const ui = {
    tr: {
        navbar: {
            home: 'Anasayfa',
            skills: 'Yetenekler',
            projects: 'Projeler',
            contact: 'İletişim',
            allProjects: 'Tüm Projeler',
        },
        home: {
            title: 'Anasayfa',
        },
        skills: {
            title: 'Yetenekler',
        },
        projects: {
            title: 'Projeler',
            allProjects: 'Tüm Projeler',
        },
        contact: {
            title: 'İletişim',
        },
    },
    en: {
        navbar: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            allProjects: 'All Projects',
        },
        home: {
            title: 'Home',
        },
        skills: {
            title: 'Skills',
        },
        projects: {
            title: 'Projects',
            allProjects: 'All Projects',
        },
        contact: {
            title: 'Contact',
        },
    },
} as const

export const routeMap: Record<Lang, Record<string, string>> = {
    tr: {
        home: '/',
        skills: '/yetenekler',
        projects: '/projeler',
        allProjects: '/projeler/tumu',
        contact: '/iletisim',
    },
    en: {
        home: '/',
        skills: '/skills',
        projects: '/projects',
        allProjects: '/projects/all',
        contact: '/contact',
    },
}