/* ==========================================================================
   PRODUCTS OVERVIEW  —  node.law/products
   ✏️  Products are listed automatically from src/content/products.ts
   ========================================================================== */

import Link from "next/link";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Badge, Container, Section, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ComingSoonGrid } from "@/components/sections/ProductCards";
import { ProductMockup } from "@/components/mockups/ProductMockup";
import { products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "AI assistant tools for legal teams: Terms & Conditions Drafting, Privacy Policy Drafting, NDA Review and Contract Review.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Precise tools for the legal work you do every week."
        description="Each Node.law tool focuses on a specific drafting or review task, built around legal reasoning and designed for review by a qualified lawyer."
      >
        <nav aria-label="Jump to product">
          <ul className="flex flex-wrap gap-2">
            {products.map((product) => (
              <li key={product.slug}>
                <a
                  href={`#${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-navy-900 transition-colors hover:border-navy-900/30"
                >
                  <Icon name={product.icon} className="size-4 text-gold-700" />
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="divide-y divide-line">
        {products.map((product) => (
          <section key={product.slug} id={product.slug} aria-labelledby={`${product.slug}-heading`} className="py-20 sm:py-24">
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
                <FadeIn>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-lg border border-gold-500/30 bg-gold-50 text-gold-700">
                      <Icon name={product.icon} className="size-5" />
                    </span>
                    {product.status === "beta" && <Badge tone="gold">Beta</Badge>}
                  </div>
                  <h2 id={`${product.slug}-heading`} className="mt-6 text-3xl font-normal tracking-tight sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 font-serif text-xl text-gold-700 italic">{product.tagline}</p>
                  <p className="mt-5 leading-relaxed text-muted">{product.summary}</p>
                  <ul className="mt-6 space-y-2.5">
                    {product.benefits.map((benefit) => (
                      <li key={benefit.title} className="flex items-start gap-2.5 text-[15px] text-ink">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-700" strokeWidth={2} />
                        {benefit.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <ButtonLink href={`/products/${product.slug}`} arrow>
                      Explore {product.name}
                    </ButtonLink>
                    <Link
                      href={`/contact?product=${product.slug}`}
                      className="px-2 text-[15px] font-medium text-gold-700 underline-offset-4 hover:underline"
                    >
                      {product.ctaLabel}
                    </Link>
                  </div>
                </FadeIn>
                <FadeIn delay={120}>
                  <ProductMockup type={product.mockup} />
                </FadeIn>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <Section tone="paper" id="coming-soon" labelledBy="coming-soon-heading">
        <SectionHeading
          id="coming-soon-heading"
          eyebrow="On the roadmap"
          title="More tools are coming."
          description="We're building the next set of tools with our early-access customers. Tell us what would help your team most."
        />
        <div className="mt-12">
          <ComingSoonGrid />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
