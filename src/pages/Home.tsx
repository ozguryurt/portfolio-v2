import dataStore from "../stores/dataStore"
import Plasma from "../components/Plasma"

const Home = () => {

    const apiData = dataStore((state) => state.apiData)

    return (
        <>
            <section id="anasayfa" className="min-h-screen flex flex-col items-center justify-center lg:px-56 px-10 relative overflow-hidden dark:bg-zinc-900 bg-white">

                <div className="reveal-blur absolute inset-0 [animation-delay:250ms]">
                    <Plasma
                        color="#ddf1ff"
                        speed={0.6}
                        direction="forward"
                        scale={1.1}
                        opacity={0.8}
                        mouseInteractive={false}
                    />

                </div>

                <div className="relative z-10">
                    <p className="reveal-blur font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center drop-shadow-lg dark:text-white text-zinc-800 text-shadow-lg [animation-delay:250ms]">
                        {apiData?.anasayfa.baslik1}
                    </p>
                    <p className="reveal-blur font-medium text-4xl sm:text-5xl lg:text-6xl text-center drop-shadow-lg dark:text-white text-zinc-800 text-shadow-lg [animation-delay:500ms]">
                        {apiData?.anasayfa.baslik2}
                    </p>
                    <p className="reveal-blur font-normal text-xl text-center mt-12 drop-shadow-md dark:text-white text-zinc-800 text-shadow-lg [animation-delay:750ms] [animation-duration:800ms]">
                        {apiData?.anasayfa.yazi}
                    </p>
                </div>

            </section>
        </>
    )
}

export default Home
