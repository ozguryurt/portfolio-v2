import { NavLink } from "react-router"
import languageStore from "../stores/languageStore"
import { routeMap, ui, type Lang } from "../utils/translations"

export default function Navbar() {
  const lang = languageStore((state) => state.lang)
  const currentLang: Lang = lang
  const t = ui[currentLang]
  const routes = routeMap[currentLang]
  const items = [
    { label: t.navbar.home, path: routes.home, end: true },
    { label: t.navbar.skills, path: routes.skills },
    { label: t.navbar.projects, path: routes.projects },
    { label: t.navbar.contact, path: routes.contact },
  ]

  return (
    <nav className="navbar-enter fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-5">
      <div className="mx-auto grid max-w-xl grid-cols-4 overflow-hidden rounded-2xl border border-zinc-300/70 bg-zinc-100/95 p-1 shadow-lg sm:rounded-full sm:border-0 sm:bg-zinc-200/70 sm:px-3 sm:py-2 sm:backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/95 sm:dark:bg-zinc-800/70">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={`/${currentLang}${item.path}`}
            end={item.end}
            className={({ isActive }) =>
              `min-h-11 rounded-xl px-1 py-3 text-center text-[11px] font-semibold leading-none transition-colors sm:min-h-0 sm:rounded-full sm:px-3 sm:py-2 sm:text-base ${
                isActive
                  ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-700 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
