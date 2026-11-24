import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Mail, Download, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/brand";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";
import { FadeInView } from "@/components/motion/FadeInView";

export async function ContactSection() {
  const t = await getTranslations("Index");

  const contactLinks = [
    {
      icon: Mail,
      label: t("contact.cta.email"),
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
    },
    {
      icon: Linkedin,
      label: t("contact.cta.linkedin"),
      href: siteConfig.links.linkedin,
      value: "linkedin.com/in/douglas-pardim",
    },
    {
      icon: Github,
      label: t("contact.cta.github"),
      href: siteConfig.links.github,
      value: "github.com/dwrp",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-muted/50 py-20 md:py-28 lg:py-36"
    >
      <div className="container relative z-10 px-4 md:px-6">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          description={t("contact.description")}
        />
        <div className="mb-10 flex flex-col justify-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <span>{t("contact.location")}</span>
          <span>{t("contact.phone")}</span>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <FadeInView key={link.label} delay={index * 0.08}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Card className="card-hover group h-full cursor-pointer border-primary/15 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 inline-flex rounded-full bg-primary p-4 text-primary-foreground transition-transform group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 font-semibold">{link.label}</h3>
                        <p className="break-all text-sm text-muted-foreground">
                          {link.value}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </FadeInView>
              );
            })}
          </div>

          <FadeInView>
            <Card className="overflow-hidden border-primary/15 shadow-xl">
              <div className="h-1.5 gradient-primary" />
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-primary p-4 text-primary-foreground">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    {t("contact.readyTitle")}
                  </h3>
                  <p className="mx-auto max-w-xl text-muted-foreground">
                    {t("contact.readyDescription")}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <a href={`mailto:${siteConfig.email}`}>
                      <Button size="lg" className="font-semibold shadow-xl">
                        <Mail className="mr-2 h-5 w-5" />
                        {t("contact.cta.email")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href={siteConfig.links.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-semibold"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {t("contact.cta.cv")}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
