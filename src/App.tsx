import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import languageStore from "./stores/languageStore"

const Home = lazy(() => import("./pages/Home"))
const Skills = lazy(() => import("./pages/Skills"))
const Contact = lazy(() => import("./pages/Contact"))
const Projects = lazy(() => import("./pages/Projects"))
const AllProjects = lazy(() => import("./pages/AllProjects"))

function PageFallback() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-white dark:bg-zinc-900">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-800 dark:border-zinc-700 dark:border-t-white" />
    </div>
  )
}

function DeferredPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageFallback />}>{children}</Suspense>
}

function RootRedirect() {
  const lang = languageStore((state) => state.lang)
  return <Navigate to={`/${lang}`} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<MainLayout />}>
        <Route index element={<DeferredPage><Home /></DeferredPage>} />
        <Route path="yetenekler" element={<DeferredPage><Skills /></DeferredPage>} />
        <Route path="skills" element={<DeferredPage><Skills /></DeferredPage>} />
        <Route path="iletisim" element={<DeferredPage><Contact /></DeferredPage>} />
        <Route path="contact" element={<DeferredPage><Contact /></DeferredPage>} />
        <Route path="projeler" element={<DeferredPage><Projects /></DeferredPage>} />
        <Route path="projects" element={<DeferredPage><Projects /></DeferredPage>} />
        <Route path="projeler/tumu" element={<DeferredPage><AllProjects /></DeferredPage>} />
        <Route path="projects/all" element={<DeferredPage><AllProjects /></DeferredPage>} />
      </Route>
    </Routes>
  )
}
