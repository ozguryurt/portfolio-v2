import { create } from 'zustand'
import type { Lang } from '../utils/translations'

function detectLang(): Lang {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'tr' || stored === 'en') return stored
    const browserLang = navigator.language.slice(0, 2)
    return browserLang === 'en' ? 'en' : 'tr'
}

type LanguageStore = {
    lang: Lang
    setLang: (lang: Lang) => void
}

const languageStore = create<LanguageStore>()((set) => ({
    lang: detectLang(),
    setLang: (lang: Lang) => {
        localStorage.setItem('lang', lang)
        set({ lang })
    },
}))

export default languageStore