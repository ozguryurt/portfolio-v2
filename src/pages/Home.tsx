import dataStore from "../stores/dataStore"
import GhostFibers from "../components/GhostFibers"
import themeStore from "../stores/themeStore"

const Home = () => {

    const apiData = dataStore((state) => state.apiData)
    const theme = themeStore((state) => state.theme)

    return (
        <>
            <section id="anasayfa" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white px-5 pb-24 pt-28 sm:px-10 lg:px-56 dark:bg-zinc-900">

                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <GhostFibers
                    lineColor="#3B82F6"
                    glowColor="#3B82F6"
                    speed={0.15}
                    scale={2}
                    rotation={60}
                    rotationSpeed={0.1}
                    layers={4}
                    waveAmplitude={0.015}
                    waveFrequency={3}
                    waveSpeed={0.15}
                    layerSpeed={0.08}
                    twist={0.1}
                    twistFrequency={5}
                    twistSpeed={1}
                    lineFrequency={6}
                    lineSpacing={2}
                    lineSharpness={16}
                    glowFalloff={10}
                    glowIntensity={1}
                    brightness={0.25}
                    blueBoost={1}
                    vignette={0.9}
                    grain={0}
                    dpr={0.75}
                    lightMode={theme === "light"}
                    fps={30}
                    paused={false}
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
