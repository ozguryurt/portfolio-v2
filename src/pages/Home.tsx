import dataStore from "../stores/dataStore"
import { motion } from "framer-motion"
import Plasma from "../components/Plasma"

const Home = () => {

    const { apiData } = dataStore()

    return (
        <>
            <section id="anasayfa" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="absolute inset-0"
                >
                    <Plasma
                        color="#B19EEF"
                        direction="forward"
                        speed={0.5}
                        scale={2}
                        opacity={0.5}
                        mouseInteractive={false}
                    />

                </motion.div>

                <div className="relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center drop-shadow-lg dark:text-white text-zinc-800"
                    >
                        {apiData?.anasayfa.baslik1}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="font-medium text-4xl sm:text-5xl lg:text-6xl text-center drop-shadow-lg dark:text-white text-zinc-800"
                    >
                        {apiData?.anasayfa.baslik2}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="font-normal text-xl text-center mt-12 drop-shadow-md dark:text-white text-zinc-800"
                    >
                        {apiData?.anasayfa.yazi}
                    </motion.p>
                </div>

            </section>
        </>
    )
}

export default Home