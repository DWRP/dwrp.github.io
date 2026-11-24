import { Locale } from "@/locales";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  lang: Locale;
  activeMenu: string;
  setTheme: (theme: Theme) => void;
  setLocale: (lang: Locale) => void;
  setActiveMenu: (activeMenu: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "dark",
      lang: "en",
      activeMenu: "",
      setActiveMenu: (activeMenu: string) => {
        set({ activeMenu });
      },
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      setLocale: (lang: Locale) => {
        set({ lang });
      },
    }),
    {
      name: "app",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
