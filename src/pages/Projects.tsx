import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import dataStore from "../stores/dataStore"
import { motion } from "framer-motion"

const Projects = () => {
  const { apiData } = dataStore()

  return (
    <section id="projeler" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }} /* tekrarlaması için once: false yapılabilir */
        className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center dark:text-white text-zinc-800 mb-5"
      >
        Projeler
      </motion.p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
        {
          apiData?.projeler.slice(0, 4).map((proje, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i + 0.25) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard ad={proje.ad} resimler={proje.resimler} url={proje.url} />
            </motion.div>
          ))
        }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto col-span-1 lg:col-span-4"
        >
          <Link to="/projeler/tumu" className="dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-800 px-8 py-2 rounded-full">
            Tüm Projeler
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects