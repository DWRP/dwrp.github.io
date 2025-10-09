"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Wrench
} from "lucide-react";

export const SkillsSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const skillCategories = [
    {
      id: "frontend",
      icon: Code2,
      color: "text-blue-500",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Styled Components",
        "Zustand",
        "Redux",
        "GraphQL",
        "HTML5",
        "CSS3"
      ]
    },
    {
      id: "backend",
      icon: Database,
      color: "text-green-500",
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
        "Microservices"
      ]
    },
    {
      id: "mobile",
      icon: Smartphone,
      color: "text-purple-500",
      skills: [
        "React Native",
        "Expo",
        "Maps Integration",
        "Push Notifications",
        "Firebase",
        "Flutter",
        "iOS",
        "Android"
      ]
    },
    {
      id: "devops",
      icon: Cloud,
      color: "text-orange-500",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Azure DevOps",
        "Lambda",
        "S3",
        "CI/CD",
        "GitHub Actions",
        "Nginx"
      ]
    },
    {
      id: "tools",
      icon: Wrench,
      color: "text-pink-500",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Jira",
        "Slack",
        "Notion",
        "Webpack",
        "Vite"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 md:py-28 lg:py-36"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-purple-500/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 ${category.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          {t(`skills.${category.id}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`skills.${category.id}.description`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
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

