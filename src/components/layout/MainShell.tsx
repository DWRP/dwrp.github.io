"use client";

import { useEffect, useRef } from "react";
import { useActiveNav } from "@/components/providers/ActiveNavProvider";

export function MainShell({ children }: { children: React.ReactNode }) {
  const { setActiveMenu } = useActiveNav();
  const activeRef = useRef("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const id = visible.target.getAttribute("id") || "";
        if (!id || id === activeRef.current) return;

        activeRef.current = id;
        window.history.replaceState(null, "", `#${id}`);
        setActiveMenu(id);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveMenu]);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }

    return () => setActiveMenu("");
  }, [setActiveMenu]);

  return (
    <main id="main-content" className="mt-14 flex-1">
      {children}
    </main>
  );
}
