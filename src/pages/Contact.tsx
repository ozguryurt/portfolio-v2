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
    <section id="iletisim" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

      <p className="reveal-up font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5 [animation-delay:250ms]">
        {t.contact.title}
      </p>

      <p className="reveal-up font-normal text-xl text-center mb-12 drop-shadow-md dark:text-white text-zinc-800 [animation-delay:250ms]">
        {apiData?.iletisim.baslik}
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
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
