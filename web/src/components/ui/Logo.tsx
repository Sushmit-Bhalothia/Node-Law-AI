import Link from "next/link";
import { cn } from "@/lib/cn";

/** The Node.law mark: three connected nodes. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <rect width="32" height="32" rx="7" fill="#0B1F3A" />
      <path d="M10 22 16 10l6 12H10Z" fill="none" stroke="#C9A56A" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="2.6" fill="#C9A56A" />
      <circle cx="10" cy="22" r="2.6" fill="#C9A56A" />
      <circle cx="22" cy="22" r="2.6" fill="#F7F1E6" />
    </svg>
  );
}

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="Node.law — home">
      <LogoMark className={dark ? "ring-1 ring-white/15 rounded-[7px]" : undefined} />
      <span className={cn("font-serif text-[1.4rem] leading-none tracking-tight", dark ? "text-white" : "text-navy-900")}>
        Node<span className={dark ? "text-gold-300" : "text-gold-700"}>.law</span>
      </span>
    </Link>
  );
}
