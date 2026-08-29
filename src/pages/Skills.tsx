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
    <section id="yetenekler" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

      <p className="reveal-up font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5 [animation-delay:250ms]">
        {t.skills.title}
      </p>

      <div className="max-w-4xl flex flex-wrap justify-center items-center gap-5">
        {
          apiData?.yetenekler.map((yetenek, i) => (
            <div
              key={yetenek.icon}
              className="reveal-up"
              style={{ animationDelay: `${(i + 0.25) * 100}ms` }}
            >
              <SkillBox icon={<SkillIcon name={yetenek.icon} label={yetenek.isim} />} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
