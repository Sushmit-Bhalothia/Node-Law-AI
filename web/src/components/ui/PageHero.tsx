import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container, Eyebrow } from "./Layout";

/** The title band at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  aside,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Buttons or other content under the description */
  children?: ReactNode;
  /** Optional content shown to the right on large screens */
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-ruled relative overflow-hidden border-b border-line bg-paper", className)}>
      <Container className="py-16 sm:py-24">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]" : undefined}>
          <div className="animate-fade-up max-w-3xl">
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className="text-4xl leading-[1.08] font-normal tracking-tight sm:text-5xl lg:text-[3.5rem]">{title}</h1>
            {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>}
            {children && <div className="mt-9">{children}</div>}
          </div>
          {aside && <div className="animate-fade-up [animation-delay:150ms]">{aside}</div>}
        </div>
      </Container>
    </div>
  );
}
