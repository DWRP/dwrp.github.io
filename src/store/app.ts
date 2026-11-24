import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  activeMenu: string;
  setTheme: (theme: Theme) => void;
  setActiveMenu: (activeMenu: string) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      activeMenu: "",
      setActiveMenu: (activeMenu: string) => {
        set({ activeMenu });
      },
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      toggleTheme: () => {
        set({ theme: get().theme === "dark" ? "light" : "dark" });
      },
    }),
    {
      name: "app",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
