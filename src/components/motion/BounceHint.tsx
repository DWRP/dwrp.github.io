"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type BounceHintProps = {
  children: React.ReactNode;
  className?: string;
};

export function BounceHint({ children, className }: BounceHintProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: prefersReducedMotion ? 0 : 1.1, duration: 0.4 }}
    >
      <motion.span
        className="inline-flex"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
