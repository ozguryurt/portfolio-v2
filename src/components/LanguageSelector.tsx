import { useLocation, useNavigate } from "react-router"
import languageStore from "../stores/languageStore"
import type { Lang } from "../utils/translations"

const languageNames: Record<Lang, string> = {
  tr: "TR",
  en: "EN",
}

const pathMap: Record<string, Record<Lang, string>> = {
  "/tr": { tr: "/tr", en: "/en" },
  "/tr/yetenekler": { tr: "/tr/yetenekler", en: "/en/skills" },
  "/tr/iletisim": { tr: "/tr/iletisim", en: "/en/contact" },
  "/tr/projeler": { tr: "/tr/projeler", en: "/en/projects" },
  "/tr/projeler/tumu": { tr: "/tr/projeler/tumu", en: "/en/projects/all" },
  "/en": { tr: "/tr", en: "/en" },
  "/en/skills": { tr: "/tr/yetenekler", en: "/en/skills" },
  "/en/contact": { tr: "/tr/iletisim", en: "/en/contact" },
  "/en/projects": { tr: "/tr/projeler", en: "/en/projects" },
  "/en/projects/all": { tr: "/tr/projeler/tumu", en: "/en/projects/all" },
}

export default function LanguageSelector() {
  const lang = languageStore((state) => state.lang)
  const setLang = languageStore((state) => state.setLang)
  const location = useLocation()
  const navigate = useNavigate()

  const switchLang = (newLang: Lang) => {
    if (newLang === lang) return
    setLang(newLang)
    navigate(pathMap[location.pathname]?.[newLang] ?? `/${newLang}`, { replace: true })
  }

  const otherLang: Lang = lang === "tr" ? "en" : "tr"

  return (
    <button
      type="button"
      aria-label={`${languageNames[otherLang]} diline geç`}
      onClick={() => switchLang(otherLang)}
      className="fixed bottom-5 left-5 z-50 cursor-pointer rounded-full bg-zinc-200/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg backdrop-blur-sm transition-opacity hover:opacity-80 dark:bg-zinc-800/80 dark:text-white"
    >
      {languageNames[otherLang]}
    </button>
  )
}
