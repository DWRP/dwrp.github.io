"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons/brand";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { siteConfig } from "@/lib/siteConfig";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const projects = [
  { id: "app-ideas", hasLink: true, hasGithub: true },
  { id: "ominix", hasLink: true, hasGithub: true },
  { id: "portfolio", hasLink: true, hasGithub: true },
] as const;

export const ProjectsSection = () => {
  const t = useTranslations("Index");
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const tags = t.raw(
              `projects.projects-infos.${project.id}.tags`
            ) as string[] | undefined;

            return (
              <motion.div
                key={project.id}
                {...getMotionProps(prefersReducedMotion)}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                }}
              >
                <Card className="flex h-full flex-col border-primary/15 shadow-lg card-hover">
                  <div className="h-1.5 gradient-primary" />
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-display text-xl font-bold">
                          {t(`projects.projects-infos.${project.id}.name`)}
                        </h3>
                        {t.has(`projects.projects-infos.${project.id}.type`) && (
                          <Badge variant="secondary" className="text-xs">
                            {t(`projects.projects-infos.${project.id}.type`)}
                          </Badge>
                        )}
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {t(`projects.projects-infos.${project.id}.desc`)}
                      </p>
                      {tags && tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 border-t pt-4">
                      {project.hasLink && (
                        <Link
                          href={t(`projects.projects-infos.${project.id}.link`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="default" className="w-full">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {t("projects.cta")}
                          </Button>
                        </Link>
                      )}
                      {project.hasGithub && (
                        <Link
                          href={t(
                            `projects.projects-infos.${project.id}.github`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t("projects.github")}
                          className={project.hasLink ? "" : "flex-1"}
                        >
                          <Button
                            variant="outline"
                            className={project.hasLink ? "" : "w-full"}
                          >
                            <Github className="h-4 w-4" aria-hidden />
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

        <motion.div
          className="mt-12 text-center"
          {...getMotionProps(prefersReducedMotion)}
        >
          <p className="mb-4 text-muted-foreground">{t("projects.moreProjects")}</p>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" aria-hidden />
              {t("projects.github")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
