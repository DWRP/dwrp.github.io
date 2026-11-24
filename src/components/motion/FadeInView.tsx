"use client";

import { motion } from "framer-motion";
import { getMotionProps } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInView({
  children,
  className,
  delay = 0,
}: FadeInViewProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionProps = getMotionProps(prefersReducedMotion);

  return (
    <motion.div
      className={className}
      {...motionProps}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
