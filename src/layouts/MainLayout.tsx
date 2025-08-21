import { Outlet } from "react-router";
import ThemeSelector from "../components/ThemeSelector";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import dataStore from "../stores/dataStore";
import ScrollToTop from "../components/ScrollToTop";
import HashScroller from "../components/HashScroller";
import Sheet from "../components/Sheet";

export default function MainLayout() {

    const { loading, error, setApiData, setLoading, setError } = dataStore()
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch('/config.json')
          const data = await response.json()
          setApiData(data)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Hata oluştu')
        } finally {
          setLoading(false)
        }
      }
      
      fetchData()
    }, [])

  return (
    <>
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-screen">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            <Navbar/>
            <ThemeSelector/>
            <ScrollToTop/>
            <HashScroller/>
            <Outlet/>
            <Sheet/>
          </>
        )
      }
    </>
  );
}
