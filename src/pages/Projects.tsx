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
    <section id="projeler" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

      <p className="reveal-up font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5 [animation-delay:250ms]">
        {t.projects.title}
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
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
        <div className="reveal-up mx-auto col-span-1 lg:col-span-4 [animation-delay:250ms]">
          <Link to={`/${currentLang}${routes.allProjects}`} className="dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-800 px-8 py-2 rounded-full">
            {t.navbar.allProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
