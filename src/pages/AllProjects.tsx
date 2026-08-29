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
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white py-32">

        <p className="reveal-up font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5 [animation-delay:250ms]">
          {t.projects.allProjects}
        </p>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
          {
            apiData?.projeler.map((proje, i) => (
              <div
                key={`${proje.ad}-${proje.resimler[0]}`}
                className="reveal-up"
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
