import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: keyof JSX.IntrinsicElements;
};

const AnimatedSection = ({
  children,
  className,
  delayMs = 0,
  as: Comp = "section",
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <Comp
      ref={ref as any}
      className={cn(
        "transition-all duration-700 will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Comp>
  );
};

export default AnimatedSection;
