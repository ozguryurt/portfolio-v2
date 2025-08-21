import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: (() => {
        const savedTheme = localStorage.getItem('theme-storage');
        if (savedTheme) {
          try {
            const parsed = JSON.parse(savedTheme);
            return parsed.state?.theme || 'light';
          } catch {
            return 'light';
          }
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      })(),
      setTheme: (theme: Theme) => {
        set({ theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Store oluşturulduktan sonra HTML elementine class ekle/çıkar
const currentTheme = themeStore.getState().theme;
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

export default themeStore