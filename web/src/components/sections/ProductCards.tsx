import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/FadeIn";
import { comingSoon, products } from "@/content/products";

/** Grid of all products from content/products.ts. */
export function ProductGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {products.map((product, i) => (
        <li key={product.slug}>
          <FadeIn delay={i * 70} className="h-full">
            <Link
              href={`/products/${product.slug}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-[0_12px_32px_-18px_rgb(11_31_58/0.35)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-lg border border-gold-500/30 bg-gold-50 text-gold-700">
                  <Icon name={product.icon} className="size-5" />
                </span>
                {product.status === "beta" && <Badge tone="gold">Beta</Badge>}
              </div>
              <h3 className="mt-6 text-2xl font-normal">{product.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{product.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900">
                Learn more
                <span className="sr-only"> about {product.name}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-gold-700 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}

/** "Coming soon" placeholder cards. */
export function ComingSoonGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {comingSoon.map((item, i) => (
        <li key={item.name}>
          <FadeIn delay={i * 60} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-dashed border-navy-900/20 bg-white/60 p-6">
              <div className="flex items-center justify-between">
                <Icon name={item.icon} className="size-5 text-muted" />
                <Badge>Coming soon</Badge>
              </div>
              <h3 className="mt-5 text-xl font-normal">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}
