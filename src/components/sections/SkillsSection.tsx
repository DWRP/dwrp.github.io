"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Cloud, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const skillCategories = [
  {
    id: "frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "GraphQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    icon: Database,
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "TypeORM",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Maps Integration",
      "Push Notifications",
      "Firebase",
      "iOS",
      "Android",
    ],
  },
  {
    id: "devops",
    icon: Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure DevOps",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Jira",
      "Webpack",
      "Vite",
    ],
  },
] as const;

export const SkillsSection = () => {
  const t = useTranslations("Index");
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeader title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                {...getMotionProps(prefersReducedMotion)}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                }}
              >
                <Card className="h-full border-primary/15 shadow-lg card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {t(`skills.${category.id}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`skills.${category.id}.description`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
