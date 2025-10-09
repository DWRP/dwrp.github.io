"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const projects = [
    {
      id: "app-ideas",
      hasLink: true,
      hasGithub: true
    },
    {
      id: "ominix",
      hasLink: true,
      hasGithub: true
    },
    {
      id: "ecommerce",
      hasLink: false,
      hasGithub: false
    },
    {
      id: "taskmanager",
      hasLink: false,
      hasGithub: false
    },
    {
      id: "deliveryapp",
      hasLink: false,
      hasGithub: false
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 md:py-28 lg:py-36"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const tags = t.raw(`projects.projects-infos.${project.id}.tags`) as string[] | undefined;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-purple-500/20 shadow-lg flex flex-col">
                  <div className="h-2 gradient-primary" />
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">
                          {t(`projects.projects-infos.${project.id}.name`)}
                        </h3>
                        {t.has(`projects.projects-infos.${project.id}.type`) && (
                          <Badge variant="secondary" className="text-xs">
                            {t(`projects.projects-infos.${project.id}.type`)}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {t(`projects.projects-infos.${project.id}.desc`)}
                      </p>
                      {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 pt-4 border-t">
                      {project.hasLink && (
                        <Link
                          href={t(`projects.projects-infos.${project.id}.link`)}
                          target="_blank"
                          className="flex-1"
                        >
                          <Button
                            variant="default"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {t("projects.cta")}
                          </Button>
                        </Link>
                      )}
                      {project.hasGithub && (
                        <Link
                          href={t(`projects.projects-infos.${project.id}.link`)}
                          target="_blank"
                          className={project.hasLink ? "" : "flex-1"}
                        >
                          <Button
                            variant="outline"
                            className={project.hasLink ? "" : "w-full"}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA for more projects */}
        <motion.div
          className="text-center mt-12"
          {...fadeInUp}
        >
          <p className="text-muted-foreground mb-4">
            Quer ver mais projetos?
          </p>
          <Link href="https://github.com/DWRP" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 hover:border-purple-500"
            >
              <Github className="mr-2 h-5 w-5" />
              {t("projects.github")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

