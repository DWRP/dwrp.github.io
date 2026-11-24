import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/brand";
import { siteConfig } from "@/lib/siteConfig";
import { FadeIn } from "@/components/motion/FadeIn";
import { BounceHint } from "@/components/motion/BounceHint";

export async function HeroSection() {
  const t = await getTranslations("Index");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(173,80%,36%,0.22),_transparent_55%),linear-gradient(160deg,_hsl(210_40%_98%)_0%,_hsl(173_30%_94%)_45%,_hsl(210_25%_92%)_100%)] dark:bg-[radial-gradient(ellipse_at_top,_hsla(173,70%,30%,0.28),_transparent_55%),linear-gradient(160deg,_hsl(210_40%_6%)_0%,_hsl(200_30%_10%)_50%,_hsl(210_35%_8%)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2] [background-image:linear-gradient(to_right,hsla(210,20%,50%,0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsla(210,20%,50%,0.08)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="container relative z-10 px-4 py-24 md:px-6 md:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-8 text-left">
          <FadeIn>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {siteConfig.name}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.24} className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg" className="font-semibold shadow-lg">
                {t("hero.cta.projects")}
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="font-semibold">
                {t("hero.cta.contact")}
              </Button>
            </a>
            <a
              href={siteConfig.links.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="ghost" className="font-semibold">
                <Download className="mr-2 h-5 w-5" />
                {t("hero.cta.cv")}
              </Button>
            </a>
          </FadeIn>

          <FadeIn delay={0.32} className="flex gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact.socialGithub")}
              className="rounded-full border border-border/80 bg-background/60 p-3 text-foreground transition hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact.socialLinkedin")}
              className="rounded-full border border-border/80 bg-background/60 p-3 text-foreground transition hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={t("contact.socialEmail")}
              className="rounded-full border border-border/80 bg-background/60 p-3 text-foreground transition hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5" aria-hidden />
            </a>
          </FadeIn>

          <BounceHint className="pt-8">
            <a
              href="#about"
              aria-label={t("contact.scrollToAbout")}
              className="inline-flex text-muted-foreground transition hover:text-primary"
            >
              <ArrowDown className="h-7 w-7" aria-hidden />
            </a>
          </BounceHint>
        </div>
      </div>
    </section>
  );
}
