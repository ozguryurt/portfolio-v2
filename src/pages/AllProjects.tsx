import ProjectCard from "../components/ProjectCard"
import dataStore from "../stores/dataStore"
import languageStore from "../stores/languageStore";
import { ui, type Lang } from "../utils/translations";

const AllProjects = () => {

  const apiData = dataStore((state) => state.apiData)
  const lang = languageStore((state) => state.lang)
  const currentLang: Lang = lang
  const t = ui[currentLang]

  return (
    <>
      <section id="projects" className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-x-clip bg-white px-4 pb-28 pt-28 sm:px-10 sm:py-32 lg:px-20 xl:px-56 dark:bg-zinc-900">

        <p className="reveal-up mb-6 text-center text-4xl font-bold text-zinc-800 [animation-delay:250ms] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
          {t.projects.allProjects}
        </p>

        <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {
            apiData?.projeler.map((proje, i) => (
              <div
                key={`${proje.ad}-${proje.resimler[0]}`}
                className="content-auto reveal-up"
                style={{ animationDelay: `${(i + 0.25) * 100}ms` }}
              >
                <ProjectCard ad={proje.ad} resimler={proje.resimler} url={proje.url} priority={i < 2} />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default AllProjects
