import themeStore from "../stores/themeStore"
import { MdNightlightRound, MdLightMode } from "react-icons/md";

const ThemeSelector = () => {

    const theme = themeStore((state) => state.theme)
    const setTheme = themeStore((state) => state.setTheme)

    return (
        <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-50 flex items-center justify-center sm:bottom-0 sm:right-0 sm:p-5">
            <button type="button" aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'} className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-zinc-100/95 px-3 text-xl text-zinc-800 shadow-lg sm:border-0 sm:bg-zinc-200 sm:px-5 sm:text-2xl dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-white sm:dark:bg-zinc-800" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <MdLightMode /> : <MdNightlightRound />}
            </button>
        </div>
    )
}

export default ThemeSelector
