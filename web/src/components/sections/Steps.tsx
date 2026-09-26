import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

/** Numbered 3-step list ("01 / 02 / 03"). */
export function Steps({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
      {steps.map((step, i) => (
        <li key={step.title}>
          <FadeIn delay={i * 90}>
            <div className={cn("border-t pt-6", dark ? "border-white/15" : "border-navy-900/15")}>
              <span
                aria-hidden="true"
                className={cn("font-serif text-4xl", dark ? "text-gold-300" : "text-gold-500")}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={cn("mt-4 text-xl font-normal sm:text-2xl", dark && "text-white")}>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className={cn("mt-3 leading-relaxed", dark ? "text-mist" : "text-muted")}>{step.body}</p>
            </div>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
