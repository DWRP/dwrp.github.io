import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";
import { Code2, Database, Smartphone, Cloud, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeInView } from "@/components/motion/FadeInView";

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

export async function SkillsSection() {
  const t = await getTranslations("Index");

  return (
    <section id="skills" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <SectionHeader title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeInView key={category.id} delay={index * 0.08}>
                <Card className="card-hover h-full border-primary/15 shadow-lg">
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
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
