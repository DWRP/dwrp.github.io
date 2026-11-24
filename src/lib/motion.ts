import type { HTMLMotionProps, Transition } from "framer-motion";

export const fadeInUpTransition: Transition = {
  duration: 0.6,
};

export const reducedMotionTransition: Transition = {
  duration: 0.01,
};

type MotionDivProps = Pick<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "transition" | "viewport"
>;

export function getMotionProps(prefersReducedMotion: boolean): MotionDivProps {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: reducedMotionTransition,
    };
  }

  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: fadeInUpTransition,
    viewport: { once: true },
  };
}
