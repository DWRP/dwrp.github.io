import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";
import { FadeInView } from "@/components/motion/FadeInView";

export async function AboutSection() {
  const t = await getTranslations("Index");
  const highlights = [
    t("about.highlights.item1"),
    t("about.highlights.item2"),
    t("about.highlights.item3"),
    t("about.highlights.item4"),
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeader title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          <FadeInView className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 blur-2xl" />
              <Image
                src={siteConfig.images.avatar}
                alt={siteConfig.name}
                width={400}
                height={400}
                className="relative rounded-full border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </FadeInView>

          <FadeInView className="order-2 space-y-6 lg:order-1">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              {t("about.intro")}
            </Badge>

            <div className="space-y-4 text-base text-muted-foreground md:text-lg">
              <p>{t("about.content1")}</p>
              <p>{t("about.content2")}</p>
              <p>{t("about.content3")}</p>
            </div>

            <Card className="border-primary/15 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 font-display text-xl font-semibold">
                  {t("about.highlights.title")}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
