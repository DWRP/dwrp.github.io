"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const EducationSection = () => {
  const t = useTranslations("Index");
  const prefersReducedMotion = usePrefersReducedMotion();
  const certifications = ["cert1", "cert2", "cert3", "cert4", "cert5"];

  return (
    <section
      id="education"
      className="w-full bg-muted/50 py-20 md:py-28 lg:py-36"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={t("education.title")}
          subtitle={t("education.subtitle")}
        />

        <div className="mx-auto max-w-5xl space-y-8">
          <motion.div {...getMotionProps(prefersReducedMotion)}>
            <Card className="overflow-hidden border-primary/15 shadow-lg card-hover">
              <div className="h-1.5 gradient-primary" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-start gap-6 md:flex-row">
                  <div className="rounded-xl bg-primary/10 p-4 text-primary">
                    <GraduationCap className="h-12 w-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display mb-2 text-2xl font-bold">
                      {t("education.degree.title")}
                    </h3>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="text-lg font-semibold text-primary">
                        {t("education.degree.institution")}
                      </span>
                      <Badge variant="secondary">
                        <Calendar className="mr-1 h-3 w-3" />
                        {t("education.degree.period")}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {t("education.degree.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="space-y-4" {...getMotionProps(prefersReducedMotion)}>
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="font-display text-2xl font-bold">
                {t("education.certifications.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {certifications.map((certId, index) => (
                <motion.div
                  key={certId}
                  {...getMotionProps(prefersReducedMotion)}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.06,
                  }}
                >
                  <Card className="h-full border-primary/15 shadow-md card-hover">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-start gap-3">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {t(`education.certifications.${certId}.year`)}
                        </Badge>
                      </div>
                      <h4 className="mb-2 text-base font-bold">
                        {t(`education.certifications.${certId}.name`)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t(`education.certifications.${certId}.issuer`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
