import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import dataStore from "../stores/dataStore"
import languageStore from "../stores/languageStore";
import { ui, routeMap, type Lang } from "../utils/translations";

const Projects = () => {
  const apiData = dataStore((state) => state.apiData)
  const lang = languageStore((state) => state.lang)
  const currentLang: Lang = lang
  const t = ui[currentLang]
  const routes = routeMap[currentLang]

  return (
    <section id="projeler" className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-x-clip bg-white px-4 pb-28 pt-28 sm:justify-center sm:px-10 sm:pb-24 lg:px-20 xl:px-56 dark:bg-zinc-900">

      <p className="reveal-up mb-6 text-center text-4xl font-bold text-zinc-800 [animation-delay:250ms] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        {t.projects.title}
      </p>

      <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {
          apiData?.projeler.slice(0, 4).map((proje, i) => (
            <div
              key={`${proje.ad}-${proje.resimler[0]}`}
              className="reveal-up"
              style={{ animationDelay: `${(i + 0.25) * 100}ms` }}
            >
              <ProjectCard ad={proje.ad} resimler={proje.resimler} url={proje.url} priority={i === 0} />
            </div>
          ))
        }
        <div className="reveal-up col-span-2 mx-auto mt-2 lg:col-span-4 [animation-delay:250ms]">
          <Link to={`/${currentLang}${routes.allProjects}`} className="inline-flex min-h-11 items-center rounded-full bg-zinc-200 px-7 py-2 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-white">
            {t.navbar.allProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
