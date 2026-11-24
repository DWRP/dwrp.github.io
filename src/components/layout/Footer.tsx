import { getTranslations } from "next-intl/server";
import { Heart } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations("Index");

  return (
    <footer className="w-full border-t bg-muted/50 px-4 py-8 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
            <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground md:justify-start">
              {t("footer.built")}
              <Heart className="h-3 w-3 fill-current text-accent" aria-hidden />
              {t("footer.and")} {t("footer.madeWith")}
            </p>
          </div>
          <nav className="flex gap-4" aria-label="Footer">
            <a
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.about")}
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
