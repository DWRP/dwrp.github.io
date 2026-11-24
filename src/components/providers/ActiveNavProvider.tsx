"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ActiveNavContextValue = {
  activeMenu: string;
  setActiveMenu: (id: string) => void;
};

const ActiveNavContext = createContext<ActiveNavContextValue | null>(null);

export function ActiveNavProvider({ children }: { children: React.ReactNode }) {
  const [activeMenu, setActiveMenuState] = useState("");

  const setActiveMenu = useCallback((id: string) => {
    setActiveMenuState(id);
  }, []);

  const value = useMemo(
    () => ({ activeMenu, setActiveMenu }),
    [activeMenu, setActiveMenu]
  );

  return (
    <ActiveNavContext.Provider value={value}>
      {children}
    </ActiveNavContext.Provider>
  );
}

export function useActiveNav() {
  const context = useContext(ActiveNavContext);
  if (!context) {
    throw new Error("useActiveNav must be used within ActiveNavProvider");
  }
  return context;
}
