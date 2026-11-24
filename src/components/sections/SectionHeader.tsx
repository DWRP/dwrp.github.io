import { FadeInView } from "@/components/motion/FadeInView";

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
  return (
    <FadeInView className="mb-12 text-center md:mb-16">
      <h2 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      )}
    </FadeInView>
  );
}
