import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Simple application-window frame used by all product mockups.
    Mockups are illustrations: hidden from screen readers and described by `label`. */
export function MockWindow({
  title,
  label,
  children,
  className,
}: {
  title: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("m-0", className)}>
      <figcaption className="sr-only">{label}</figcaption>
      <div
        aria-hidden="true"
        className="@container overflow-hidden rounded-xl border border-navy-900/10 bg-white text-left shadow-[0_40px_80px_-40px_rgb(11_31_58/0.45),0_0_0_1px_rgb(11_31_58/0.02)] select-none"
      >
        <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-navy-900/15" />
            <span className="size-2.5 rounded-full bg-navy-900/15" />
            <span className="size-2.5 rounded-full bg-navy-900/15" />
          </div>
          <p className="truncate text-xs text-muted">{title}</p>
        </div>
        {children}
      </div>
    </figure>
  );
}

export function RiskPill({ level }: { level: "high" | "medium" | "low" }) {
  const styles = {
    high: "bg-risk-high-bg text-risk-high border-risk-high/20",
    medium: "bg-risk-med-bg text-risk-med border-risk-med/20",
    low: "bg-risk-low-bg text-risk-low border-risk-low/20",
  };
  const labels = { high: "High risk", medium: "Medium", low: "Standard" };
  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px] font-medium", styles[level])}>
      <span className="size-1.5 rounded-full bg-current" />
      {labels[level]}
    </span>
  );
}
