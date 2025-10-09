"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const ExperienceSection = () => {
  const t = useTranslations("Index");
  const [expandedJobs, setExpandedJobs] = useState<string[]>(["job1"]);

  const toggleJob = (jobId: string) => {
    setExpandedJobs(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const jobs = ["job1", "job2", "job3"];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section
      id="experience"
      className="w-full py-20 md:py-28 lg:py-36 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-pink-500 hidden md:block" />

          <div className="space-y-8">
            {jobs.map((jobId, index) => {
              const isExpanded = expandedJobs.includes(jobId);
              const achievements = t.raw(`experience.jobs.${jobId}.achievements`) as string[];

              return (
                <motion.div
                  key={jobId}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-background shadow-lg hidden md:block z-10" />

                  <Card className="ml-0 md:ml-20 card-hover border-purple-500/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {t(`experience.jobs.${jobId}.position`)}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold mb-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{t(`experience.jobs.${jobId}.company`)}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge variant="secondary" className="w-fit">
                            <Calendar className="h-3 w-3 mr-1" />
                            {t(`experience.jobs.${jobId}.period`)}
                          </Badge>
                          <Badge variant="outline" className="w-fit">
                            <MapPin className="h-3 w-3 mr-1" />
                            {t(`experience.jobs.${jobId}.location`)}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {t(`experience.jobs.${jobId}.description`)}
                      </p>

                      {/* Achievements */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                            Principais Conquistas:
                          </h4>
                          <ul className="space-y-2">
                            {achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleJob(jobId)}
                        className="mt-4 text-purple-600 dark:text-purple-400"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            {t("experience.viewLess")}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
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

