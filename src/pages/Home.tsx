import dataStore from "../stores/dataStore"
import Plasma from "../components/Plasma"

const Home = () => {

    const apiData = dataStore((state) => state.apiData)

    return (
        <>
            <section id="anasayfa" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white px-5 pb-24 pt-28 sm:px-10 lg:px-56 dark:bg-zinc-900">

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

                <div className="relative z-10 mx-auto max-w-5xl">
                    <p className="reveal-blur text-center text-[2rem] font-bold leading-[1.05] text-zinc-800 drop-shadow-lg [animation-delay:250ms] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
                        {apiData?.anasayfa.baslik1}
                    </p>
                    <p className="reveal-blur mt-2 text-center text-3xl font-medium leading-tight text-zinc-800 drop-shadow-lg [animation-delay:500ms] sm:text-5xl lg:text-6xl dark:text-white">
                        {apiData?.anasayfa.baslik2}
                    </p>
                    <p className="reveal-blur mx-auto mt-7 max-w-3xl text-center text-base font-normal leading-relaxed text-zinc-700 drop-shadow-md [animation-delay:750ms] [animation-duration:800ms] sm:mt-12 sm:text-xl dark:text-zinc-100">
                        {apiData?.anasayfa.yazi}
                    </p>
                </div>

            </section>
        </>
    )
}

export default Home
