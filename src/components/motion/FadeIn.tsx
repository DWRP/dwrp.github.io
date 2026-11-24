"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.55,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
