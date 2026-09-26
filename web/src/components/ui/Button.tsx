import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "light" | "outlineLight" | "text";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-700",
  secondary: "border border-line bg-white text-navy-900 hover:border-navy-900/30 hover:bg-paper",
  light: "bg-white text-navy-900 hover:bg-gold-50",
  outlineLight: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  text: "text-gold-700 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type StyleProps = { variant?: Variant; size?: Size; arrow?: boolean };

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}) {
  return cn(base, variants[variant], variant !== "text" && sizes[size]);
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      strokeWidth={1.8}
    />
  );
}

/** A link styled as a button — use for navigation. */
export function ButtonLink({
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: StyleProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(buttonClasses({ variant, size }), className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** A real <button> — use for actions such as submitting a form. */
export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  type = "button",
  ...props
}: StyleProps & ComponentProps<"button">) {
  return (
    <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
