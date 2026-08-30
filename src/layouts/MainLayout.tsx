import { lazy, Suspense, useEffect, useRef } from "react"
import { Outlet, useParams } from "react-router"
import LanguageSelector from "../components/LanguageSelector"
import Navbar from "../components/Navbar"
import ThemeSelector from "../components/ThemeSelector"
import dataStore, { type ApiData } from "../stores/dataStore"
import languageStore from "../stores/languageStore"
import sheetStore from "../stores/sheetStore"
import type { Lang } from "../utils/translations"

const Sheet = lazy(() => import("../components/Sheet"))
const localeCache = new Map<Lang, ApiData>()

function DeferredSheet() {
  const isOpen = sheetStore((state) => state.isOpen)
  const hasOpened = useRef(false)

  if (isOpen) hasOpened.current = true
  if (!hasOpened.current) return null

  return (
    <Suspense fallback={null}>
      <Sheet />
    </Suspense>
  )
}

export default function MainLayout() {
  const apiData = dataStore((state) => state.apiData)
  const loading = dataStore((state) => state.loading)
  const error = dataStore((state) => state.error)
  const setApiData = dataStore((state) => state.setApiData)
  const setLoading = dataStore((state) => state.setLoading)
  const setError = dataStore((state) => state.setError)
  const storeLang = languageStore((state) => state.lang)
  const setLang = languageStore((state) => state.setLang)
  const { lang: urlLang } = useParams()
  const effectiveLang: Lang = urlLang === "tr" || urlLang === "en" ? urlLang : storeLang

  useEffect(() => {
    document.documentElement.lang = effectiveLang
    if (effectiveLang !== storeLang) setLang(effectiveLang)
  }, [effectiveLang, setLang, storeLang])

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      const cachedData = localeCache.get(effectiveLang)
      if (cachedData) {
        setApiData(cachedData)
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/locales/${effectiveLang}.json`, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Dil dosyası yüklenemedi (${response.status})`)

        const data = await response.json() as ApiData
        localeCache.set(effectiveLang, data)
        setApiData(data)
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return
        setError(err instanceof Error ? err.message : "Hata oluştu")
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void fetchData()
    return () => controller.abort()
  }, [effectiveLang, setApiData, setError, setLoading])

  return error ? (
    <div className="flex min-h-[100svh] items-center justify-center px-5 text-center">
      <p className="text-red-500">{error}</p>
    </div>
  ) : (
    <>
      <Navbar />
      <ThemeSelector />
      <LanguageSelector />
      <DeferredSheet />
      {loading && !apiData ? (
        <div className="flex min-h-[100svh] items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-800 dark:border-zinc-700 dark:border-t-white" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}
