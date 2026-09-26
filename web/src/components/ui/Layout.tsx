/* Layout building blocks: Container, Section, SectionHeading, Eyebrow, Badge. */

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centres content and applies consistent side padding. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

type Tone = "white" | "paper" | "navy";

/** A full-width page band with vertical spacing. */
export function Section({
  tone = "white",
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tone === "navy" ? "dark" : undefined}
      className={cn(
        "py-20 sm:py-28",
        tone === "paper" && "border-y border-line bg-paper",
        tone === "navy" && "bg-navy-900 text-white",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Small uppercase label shown above headings. */
export function Eyebrow({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase",
        dark ? "text-gold-300" : "text-gold-700",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-6", dark ? "bg-gold-300/70" : "bg-gold-500")} />
      {children}
    </p>
  );
}

/** Eyebrow + H2 + intro paragraph. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  dark,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow dark={dark} className={cn("mb-4", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl leading-[1.15] font-normal tracking-tight sm:text-[2.6rem]",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-mist" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}

type BadgeTone = "gold" | "neutral" | "navy";

export function Badge({ tone = "neutral", children, className }: { tone?: BadgeTone; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tone === "gold" && "border-gold-500/40 bg-gold-50 text-gold-700",
        tone === "neutral" && "border-line bg-white text-muted",
        tone === "navy" && "border-white/15 bg-white/5 text-mist",
        className,
      )}
    >
      {children}
    </span>
  );
}
