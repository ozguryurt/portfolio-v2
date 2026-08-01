import { useLocation } from "react-router"
import languageStore from "../stores/languageStore"
import type { Lang } from "../utils/translations"

const languageNames: Record<Lang, string> = {
    tr: 'TR',
    en: 'EN',
}

export default function LanguageSelector() {
    const { lang, setLang } = languageStore()
    const location = useLocation()

    const pathMap: Record<string, Record<Lang, string>> = {
        '/tr': { tr: '/tr', en: '/en' },
        '/tr/yetenekler': { tr: '/tr/yetenekler', en: '/en/skills' },
        '/tr/iletisim': { tr: '/tr/iletisim', en: '/en/contact' },
        '/tr/projeler': { tr: '/tr/projeler', en: '/en/projects' },
        '/tr/projeler/tumu': { tr: '/tr/projeler/tumu', en: '/en/projects/all' },
        '/en': { tr: '/tr', en: '/en' },
        '/en/skills': { tr: '/tr/yetenekler', en: '/en/skills' },
        '/en/contact': { tr: '/tr/iletisim', en: '/en/contact' },
        '/en/projects': { tr: '/tr/projeler', en: '/en/projects' },
        '/en/projects/all': { tr: '/tr/projeler/tumu', en: '/en/projects/all' },
    }

    const switchLang = (newLang: Lang) => {
        if (newLang === lang) return
        setLang(newLang)
        const newPath = pathMap[location.pathname]?.[newLang] || `/${newLang}`
        window.history.replaceState(null, '', newPath)
    }

    const otherLang: Lang = lang === 'tr' ? 'en' : 'tr'

    return (
        <button
            onClick={() => switchLang(otherLang)}
            className="fixed bottom-5 left-5 z-50 backdrop-blur-sm dark:bg-zinc-800/50 bg-zinc-200/50 shadow-lg rounded-full py-2 px-4 font-medium text-sm dark:text-white text-zinc-800 hover:opacity-80 transition-opacity cursor-pointer"
        >
            {languageNames[otherLang]}
        </button>
    )
}