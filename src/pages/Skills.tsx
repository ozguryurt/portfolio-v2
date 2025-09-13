import SkillBox from "../components/SkillCard"
import dataStore from "../stores/dataStore"
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"

const Skills = () => {
  const { apiData } = dataStore()

  return (
    <section id="yetenekler" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }} /* tekrarlaması için once: false yapılabilir */
        className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5"
      >
        Yetenekler
      </motion.p>

      <div className="max-w-4xl flex flex-wrap justify-center items-center gap-5">
        {
          apiData?.yetenekler.map((yetenek, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i + 0.25) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }} 
            >
              <SkillBox icon={<Icon icon={yetenek.icon} />} />
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills