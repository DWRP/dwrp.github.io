"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useId, useState } from "react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const ExperienceSection = () => {
  const t = useTranslations("Index");
  const [expandedJobs, setExpandedJobs] = useState<string[]>(["job1"]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const regionIdPrefix = useId();

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const jobs = ["job1", "job2", "job3"];

  return (
    <section
      id="experience"
      className="w-full bg-muted/50 py-20 md:py-28 lg:py-36"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-linear-to-b from-primary via-primary/70 to-accent md:block" />

          <div className="space-y-8">
            {jobs.map((jobId, index) => {
              const isExpanded = expandedJobs.includes(jobId);
              const achievements = t.raw(
                `experience.jobs.${jobId}.achievements`
              ) as string[];
              const regionId = `${regionIdPrefix}-${jobId}`;

              return (
                <motion.div
                  key={jobId}
                  {...getMotionProps(prefersReducedMotion)}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.6,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                  }}
                  className="relative"
                >
                  <div className="absolute top-8 left-6 z-10 hidden h-5 w-5 rounded-full border-4 border-background bg-primary shadow-lg md:block" />

                  <Card className="ml-0 border-primary/15 shadow-lg md:ml-20">
                    <CardContent className="p-6">
                      <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div className="flex-1">
                          <h3 className="font-display mb-2 text-xl font-bold md:text-2xl">
                            {t(`experience.jobs.${jobId}.position`)}
                          </h3>
                          <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
                            <Briefcase className="h-4 w-4" />
                            <span>{t(`experience.jobs.${jobId}.company`)}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge variant="secondary" className="w-fit">
                            <Calendar className="mr-1 h-3 w-3" />
                            {t(`experience.jobs.${jobId}.period`)}
                          </Badge>
                          <Badge variant="outline" className="w-fit">
                            <MapPin className="mr-1 h-3 w-3" />
                            {t(`experience.jobs.${jobId}.location`)}
                          </Badge>
                        </div>
                      </div>

                      <p className="mb-4 text-muted-foreground">
                        {t(`experience.jobs.${jobId}.description`)}
                      </p>

                      <div id={regionId} hidden={!isExpanded}>
                        {isExpanded && (
                          <>
                            <h4 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                              {t("experience.achievementsTitle")}
                            </h4>
                            <ul className="space-y-2">
                              {achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="mt-1 text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleJob(jobId)}
                        className="mt-4 text-primary"
                        aria-expanded={isExpanded}
                        aria-controls={regionId}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="mr-1 h-4 w-4" />
                            {t("experience.viewLess")}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="mr-1 h-4 w-4" />
                            {t("experience.viewMore")}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
