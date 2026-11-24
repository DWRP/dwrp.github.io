"use client";

import { motion } from "framer-motion";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionProps = getMotionProps(prefersReducedMotion);

  return (
    <motion.div className="text-center mb-12 md:mb-16" {...motionProps}>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}
