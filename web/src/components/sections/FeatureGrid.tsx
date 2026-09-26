import { FadeIn } from "@/components/ui/FadeIn";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Grid of icon + title + text items (value props, benefits, security pillars). */
export function FeatureGrid({
  items,
  columns = 3,
  dark,
}: {
  items: { title: string; body: string; icon: IconName }[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-12 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((item, i) => (
        <li key={item.title}>
          <FadeIn delay={i * 70}>
            <span
              className={cn(
                "grid size-11 place-items-center rounded-lg border",
                dark ? "border-gold-300/30 bg-white/5 text-gold-300" : "border-gold-500/30 bg-gold-50 text-gold-700",
              )}
            >
              <Icon name={item.icon} className="size-5" />
            </span>
            <h3 className={cn("mt-5 text-xl font-normal", dark && "text-white")}>{item.title}</h3>
            <p className={cn("mt-2.5 leading-relaxed", dark ? "text-mist" : "text-muted")}>{item.body}</p>
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}
