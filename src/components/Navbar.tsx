import { Link, useLocation, useParams } from "react-router"
import languageStore from "../stores/languageStore"
import { routeMap, ui, type Lang } from "../utils/translations"

export default function Navbar() {
  const storeLang = languageStore((state) => state.lang)
  const { lang: urlLang } = useParams()
  const currentLang: Lang = urlLang === "tr" || urlLang === "en" ? urlLang : storeLang
  const { pathname } = useLocation()
  const currentPath = pathname.replace(/\/+$/, "") || "/"
  const t = ui[currentLang]
  const routes = routeMap[currentLang]
  const items = [
    { key: "home", label: t.navbar.home, path: routes.home, home: true },
    { key: "skills", label: t.navbar.skills, path: routes.skills },
    { key: "projects", label: t.navbar.projects, path: routes.projects },
    { key: "contact", label: t.navbar.contact, path: routes.contact },
  ]

  return (
    <nav className="navbar-enter fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-5">
      <div className="mx-auto grid max-w-xl grid-cols-4 overflow-hidden rounded-2xl border border-zinc-300/70 bg-zinc-100/90 p-1 shadow-lg backdrop-blur-md sm:rounded-full sm:border-0 sm:bg-zinc-200/70 sm:px-3 sm:py-2 sm:backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/90 sm:dark:bg-zinc-800/70">
        {items.map((item) => {
          const targetPath = `/${currentLang}${item.path}`.replace(/\/+$/, "") || "/"
          const isActive = item.home
            ? currentPath === `/${currentLang}`
            : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)

          return (
            <Link
              key={item.key}
              to={`/${currentLang}${item.path}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-11 items-center justify-center rounded-xl px-1 py-3 text-center text-[11px] font-semibold leading-tight transition-colors sm:min-h-0 sm:rounded-full sm:px-3 sm:py-2 sm:text-base ${
                isActive
                  ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-700 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
