import themeStore from "../stores/themeStore"
import { MdNightlightRound, MdLightMode } from "react-icons/md";

const ThemeSelector = () => {

    const { theme, setTheme } = themeStore()

    return (
        <div className="fixed bottom-0 right-0 flex justify-center items-center p-5 z-50">
            <button className="text-2xl dark:text-white text-zinc-800 cursor-pointer dark:bg-zinc-800 bg-zinc-200 rounded-full py-2 px-5" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <MdLightMode /> : <MdNightlightRound />}
            </button>
        </div>
    )
}

export default ThemeSelector