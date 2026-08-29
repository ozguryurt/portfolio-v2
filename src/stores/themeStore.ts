import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "dark" | "light"

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

let transitionTimer: number | undefined

function applyTheme(theme: Theme, animate = false) {
  if (animate) {
    document.documentElement.classList.add("theme-transitioning")
    if (transitionTimer) window.clearTimeout(transitionTimer)
    transitionTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning")
    }, 350)
  }
  document.documentElement.classList.toggle("dark", theme === "dark")
}

const themeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      setTheme: (theme) => {
        applyTheme(theme, true)
        set({ theme })
      },
    }),
    { name: "theme-storage" },
  ),
)

applyTheme(themeStore.getState().theme)

export default themeStore
