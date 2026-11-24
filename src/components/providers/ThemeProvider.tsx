"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const THEME_EVENT = "theme-change";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;

    // Migrate legacy Zustand persist shape: { state: { theme } }
    const legacy = localStorage.getItem("app");
    if (legacy) {
      const parsed = JSON.parse(legacy) as { state?: { theme?: Theme } };
      if (parsed.state?.theme === "light" || parsed.state?.theme === "dark") {
        localStorage.setItem(THEME_STORAGE_KEY, parsed.state.theme);
        return parsed.state.theme;
      }
    }
  } catch {
    // ignore
  }
  return "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): Theme {
  const theme = readStoredTheme();
  applyTheme(theme);
  return theme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function writeTheme(theme: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setTheme = useCallback((next: Theme) => {
    writeTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    writeTheme(readStoredTheme() === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDarkMode: theme === "dark",
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export const themeBootScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){var legacy=localStorage.getItem('app');if(legacy){t=JSON.parse(legacy).state&&JSON.parse(legacy).state.theme}}if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;
