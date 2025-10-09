"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20 scale-110" />
              <Image
                src="https://avatars.githubusercontent.com/u/34161002?v=4"
                alt="Douglas Pardim"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-purple-500/20 shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            {...fadeInUp}
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {t("about.intro")}
            </Badge>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>{t("about.content1")}</p>
              <p>{t("about.content2")}</p>
              <p>{t("about.content3")}</p>
            </div>

            {/* Highlights */}
            <Card className="border-purple-500/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t("about.highlights.title")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("about.highlights.item1"),
                    t("about.highlights.item2"),
                    t("about.highlights.item3"),
                    t("about.highlights.item4")
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

