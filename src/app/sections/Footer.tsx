import { useTranslations } from "next-intl";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  const t = useTranslations("Index");

  return (
    <footer className="w-full py-8 px-4 md:px-6 border-t bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {t("footer.rights")}
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              {t("footer.built")} 
              <Heart className="h-3 w-3 text-red-500 fill-current" /> 
              {t("footer.and")} {t("footer.madeWith")}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
