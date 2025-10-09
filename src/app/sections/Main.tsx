"use client";

import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/store/app";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Main = () => {
  const { setActiveMenu } = useAppStore();
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";

      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`);
        setActiveMenu(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, setActiveMenu]);

  useEffect(() => {
    if (location.hash) {
      window.location.replace(location.href);
    }
  }, []);

  return (
    <main className="flex-1 mt-14">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Main;
