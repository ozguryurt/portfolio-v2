import dataStore from "../stores/dataStore"
import { motion } from "framer-motion"

const Home = () => {

    const { apiData } = dataStore()

    return (
        <>
            <section id="anasayfa" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

                <div
                className="absolute w-80 h-80 rounded-full top-24 left-24 opacity-25 blur-3xl
                            bg-sky-500 dark:bg-indigo-300"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "0s" }}
                ></div>

                <div
                className="absolute w-64 h-64 rounded-full bottom-32 left-48 opacity-25 blur-3xl
                            bg-blue-500 dark:bg-indigo-300"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
                ></div>

                <div
                className="absolute w-72 h-72 rounded-full top-40 right-72 opacity-25 blur-3xl
                            bg-sky-500 dark:bg-indigo-400"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "2s" }}
                ></div>

                <div
                className="absolute w-64 h-64 rounded-full bottom-32 right-96 opacity-25 blur-3xl
                            bg-blue-500 dark:bg-indigo-400"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "3s" }}
                ></div>

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