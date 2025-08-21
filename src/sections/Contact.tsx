import ContactBox from "../components/ContactCard";
import dataStore from "../stores/dataStore"
import { motion } from "framer-motion"

const Contact = () => {
  const { apiData } = dataStore()

  return (
    <section id="iletisim" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }} /* tekrarlaması için once: false yapılabilir */
        className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5"
      >
        İletişim
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }} /* tekrarlaması için once: false yapılabilir */
        className="font-normal text-xl text-center mb-12 drop-shadow-md dark:text-white text-zinc-800"
      >
        {apiData?.iletisim.baslik}
      </motion.p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        {apiData?.iletisim.bilgiler.map((iletisim, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i + 0.25) * 0.1 }}
            viewport={{ once: true, amount: 0.2 }} 
          >
            <ContactBox url={iletisim.url} baslik={iletisim.baslik} deger={iletisim.deger} icon={iletisim.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Contact