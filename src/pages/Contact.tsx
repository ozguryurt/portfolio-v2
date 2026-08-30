import ContactBox from "../components/ContactCard";
import dataStore from "../stores/dataStore"
import languageStore from "../stores/languageStore";
import { ui, type Lang } from "../utils/translations";

const Contact = () => {
  const apiData = dataStore((state) => state.apiData)
  const lang = languageStore((state) => state.lang)
  const currentLang: Lang = lang
  const t = ui[currentLang]

  return (
    <section id="iletisim" className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-x-clip bg-white px-5 pb-28 pt-28 sm:justify-center sm:px-10 sm:pb-24 lg:px-20 xl:px-56 dark:bg-zinc-900">

      <p className="reveal-up mb-4 text-center text-4xl font-bold text-zinc-800 [animation-delay:250ms] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        {t.contact.title}
      </p>

      <p className="reveal-up mb-8 max-w-3xl text-center text-base font-normal leading-relaxed text-zinc-700 drop-shadow-md [animation-delay:250ms] sm:mb-12 sm:text-xl dark:text-zinc-100">
        {apiData?.iletisim.baslik}
      </p>

      <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:gap-5 lg:max-w-none lg:grid-cols-3">
        {apiData?.iletisim.bilgiler.map((iletisim, i) => (
          <div
            key={iletisim.url}
            className="reveal-up"
            style={{ animationDelay: `${(i + 0.25) * 100}ms` }}
          >
            <ContactBox url={iletisim.url} baslik={iletisim.baslik} deger={iletisim.deger} icon={iletisim.icon} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
