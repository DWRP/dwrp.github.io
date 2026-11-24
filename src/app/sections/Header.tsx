"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales } from "@/locales";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useAppStore } from "@/store/app";
import { siteConfig } from "@/lib/siteConfig";

const NAV_LINKS = [
  "about",
  "experience",
  "skills",
  "education",
  "projects",
  "contact",
] as const;

const Header = ({
  locale,
  isDarkMode,
  toggleTheme,
  changeLanguage,
}: {
  locale: Locale;
  isDarkMode: boolean;
  toggleTheme: () => void;
  changeLanguage: (lang: Locale) => void;
}) => {
  const t = useTranslations("Index");
  const { activeMenu, setActiveMenu } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const checkActiveLink = (link: string) =>
    activeMenu === link
      ? "text-primary font-semibold"
      : "text-foreground/80";

  const updateActiveLink = (link?: string) => setActiveMenu(link || "");

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[90] bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <header className="fixed z-50 flex h-14 w-full items-center justify-between border-b border-border/80 bg-background/90 px-4 backdrop-blur-md lg:px-6">
        <Link
          className="flex items-center"
          href="#home"
          onClick={() => updateActiveLink()}
        >
          <Image
            src="/dwrp.svg"
            alt=""
            width={40}
            height={40}
            aria-hidden
          />
          <span className="font-display ml-2 font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              className={`text-sm font-medium underline-offset-4 hover:underline ${checkActiveLink(link)}`}
              href={`#${link}`}
              onClick={() => updateActiveLink(link)}
            >
              {t(`nav.${link}`)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4 md:gap-4">
          <Select
            value={locale}
            onValueChange={(value) => changeLanguage(value as Locale)}
          >
            <SelectTrigger className="w-[100px] md:w-[120px]" aria-label="Language">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {locales.map((item) => (
                <SelectItem value={item} key={item}>
                  {t(`nav.locales.${item}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? t("switchToLightMode") : t("switchToDarkMode")
            }
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="flex items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          hidden={!isMenuOpen}
          className={`fixed top-0 right-0 z-[100] h-full w-64 transform bg-background shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            className="absolute top-4 right-4 rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="mt-8 flex flex-col items-start space-y-4 p-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                className={`text-sm font-medium underline-offset-4 hover:underline ${checkActiveLink(link)}`}
                href={`#${link}`}
                onClick={() => {
                  updateActiveLink(link);
                  closeMenu();
                }}
              >
                {t(`nav.${link}`)}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
