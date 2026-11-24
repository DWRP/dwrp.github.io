import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  ExperienceJobs,
  type ExperienceJob,
} from "@/components/sections/ExperienceJobs";

const JOB_IDS = ["job1", "job2", "job3"] as const;

export async function ExperienceSection() {
  const t = await getTranslations("Index");

  const jobs: ExperienceJob[] = JOB_IDS.map((jobId) => ({
    id: jobId,
    position: t(`experience.jobs.${jobId}.position`),
    company: t(`experience.jobs.${jobId}.company`),
    period: t(`experience.jobs.${jobId}.period`),
    location: t(`experience.jobs.${jobId}.location`),
    description: t(`experience.jobs.${jobId}.description`),
    achievements: t.raw(`experience.jobs.${jobId}.achievements`) as string[],
  }));

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
        <ExperienceJobs
          jobs={jobs}
          achievementsTitle={t("experience.achievementsTitle")}
          viewMore={t("experience.viewMore")}
          viewLess={t("experience.viewLess")}
        />
      </div>
    </section>
  );
}
