"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const EducationSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const certifications = ["cert1", "cert2", "cert3", "cert4", "cert5"];

  return (
    <section
      id="education"
      className="w-full py-20 md:py-28 lg:py-36 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("education.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover border-purple-500/20 shadow-lg overflow-hidden">
              <div className="h-2 gradient-primary" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                    <GraduationCap className="h-12 w-12 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("education.degree.title")}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                        {t("education.degree.institution")}
                      </span>
                      <Badge variant="secondary">
                        <Calendar className="h-3 w-3 mr-1" />
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

          {/* Certifications */}
          <motion.div
            className="space-y-4"
            {...fadeInUp}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-purple-500" />
              <h3 className="text-2xl font-bold">
                {t("education.certifications.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {certifications.map((certId, index) => (
                <motion.div
                  key={certId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover border-purple-500/20 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                          <Award className="h-5 w-5 text-purple-500" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {t(`education.certifications.${certId}.year`)}
                        </Badge>
                      </div>
                      <h4 className="font-bold mb-2 text-base">
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

