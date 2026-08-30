import SkillBox from "../components/SkillCard"
import SkillIcon from "../components/SkillIcon"
import dataStore from "../stores/dataStore"
import languageStore from "../stores/languageStore";
import { ui, type Lang } from "../utils/translations";

const Skills = () => {
  const apiData = dataStore((state) => state.apiData)
  const lang = languageStore((state) => state.lang)
  const currentLang: Lang = lang
  const t = ui[currentLang]

  return (
    <section id="yetenekler" className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-x-clip bg-white px-5 pb-28 pt-28 sm:justify-center sm:px-10 sm:pb-24 lg:px-56 dark:bg-zinc-900">

      <p className="reveal-up mb-6 text-center text-4xl font-bold text-zinc-800 [animation-delay:250ms] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        {t.skills.title}
      </p>

      <div className="grid w-full max-w-sm grid-cols-4 gap-3 sm:flex sm:max-w-4xl sm:flex-wrap sm:items-center sm:justify-center sm:gap-5">
        {
          apiData?.yetenekler.map((yetenek, i) => (
            <div
              key={yetenek.icon}
              className="reveal-up"
              style={{ animationDelay: `${(i + 0.25) * 100}ms` }}
            >
              <SkillBox label={yetenek.isim} icon={<SkillIcon name={yetenek.icon} label={yetenek.isim} />} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
