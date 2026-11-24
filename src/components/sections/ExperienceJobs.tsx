"use client";

import { useId, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FadeInView } from "@/components/motion/FadeInView";

export type ExperienceJob = {
  id: string;
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

type ExperienceJobsProps = {
  jobs: ExperienceJob[];
  achievementsTitle: string;
  viewMore: string;
  viewLess: string;
};

export function ExperienceJobs({
  jobs,
  achievementsTitle,
  viewMore,
  viewLess,
}: ExperienceJobsProps) {
  const [expandedJobs, setExpandedJobs] = useState<string[]>(["job1"]);
  const regionIdPrefix = useId();

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-linear-to-b from-primary via-primary/70 to-accent md:block" />

      <div className="space-y-8">
        {jobs.map((job, index) => {
          const isExpanded = expandedJobs.includes(job.id);
          const regionId = `${regionIdPrefix}-${job.id}`;

          return (
            <FadeInView key={job.id} delay={index * 0.08} className="relative">
              <div className="absolute top-8 left-6 z-10 hidden h-5 w-5 rounded-full border-4 border-background bg-primary shadow-lg md:block" />

              <Card className="ml-0 border-primary/15 shadow-lg md:ml-20">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div className="flex-1">
                      <h3 className="font-display mb-2 text-xl font-bold md:text-2xl">
                        {job.position}
                      </h3>
                      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="mr-1 h-3 w-3" />
                        {job.period}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        <MapPin className="mr-1 h-3 w-3" />
                        {job.location}
                      </Badge>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">{job.description}</p>

                  <div id={regionId} hidden={!isExpanded}>
                    {isExpanded && (
                      <>
                        <h4 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                          {achievementsTitle}
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement) => (
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
                    onClick={() => toggleJob(job.id)}
                    className="mt-4 text-primary"
                    aria-expanded={isExpanded}
                    aria-controls={regionId}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="mr-1 h-4 w-4" />
                        {viewLess}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-1 h-4 w-4" />
                        {viewMore}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </FadeInView>
          );
        })}
      </div>
    </div>
  );
}
