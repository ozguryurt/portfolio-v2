import { Outlet, useParams } from "react-router";
import ThemeSelector from "../components/ThemeSelector";
import LanguageSelector from "../components/LanguageSelector";
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import dataStore from "../stores/dataStore";
import languageStore from "../stores/languageStore";
import Sheet from "../components/Sheet";

export default function MainLayout() {

  const { apiData, loading, error, setApiData, setLoading, setError } = dataStore()
  const { lang: storeLang, setLang } = languageStore()
  const { lang: urlLang } = useParams()
  const initialized = useRef(false)

  // Sync store from URL on initial load
  useEffect(() => {
    if (!initialized.current && (urlLang === 'tr' || urlLang === 'en')) {
      setLang(urlLang)
      initialized.current = true
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/locales/${storeLang}.json`)
        const data = await response.json()
        setApiData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Hata oluştu')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [storeLang])

  return (
    <>
      {error ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          <Navbar />
          <ThemeSelector />
          <LanguageSelector />
          <Sheet />
          {loading && !apiData ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <Outlet />
          )}
        </>
      )}
    </>
  );
}