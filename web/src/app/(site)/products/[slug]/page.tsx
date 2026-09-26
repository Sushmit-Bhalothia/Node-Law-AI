/* ==========================================================================
   INDIVIDUAL PRODUCT PAGE  —  node.law/products/<slug>
   One template for every product. ✏️ Edit text in src/content/products.ts
   ========================================================================== */

import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Info, Minus } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Badge, Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqList } from "@/components/sections/FaqList";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Steps } from "@/components/sections/Steps";
import { ProductMockup } from "@/components/mockups/ProductMockup";
import { getProduct, products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Only build pages for products listed in products.ts (others show the 404 page)
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({ ...product.seo, path: `/products/${product.slug}` });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const requestHref = `/contact?product=${product.slug}`;
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="product-heading" className="bg-ruled relative border-b border-line bg-paper">
        <Container className="pt-10 pb-20 sm:pt-14 sm:pb-24">
          <nav aria-label="Breadcrumb" className="animate-fade-up">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/products" className="hover:text-navy-900">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-navy-900">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="animate-fade-up mt-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg border border-gold-500/30 bg-gold-50 text-gold-700">
                <Icon name={product.icon} className="size-5" />
              </span>
              {product.status === "beta" && <Badge tone="gold">Beta</Badge>}
            </div>
            <h1 id="product-heading" className="mt-6 text-4xl leading-[1.08] font-normal tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {product.name}
            </h1>
            <p className="mt-4 font-serif text-2xl text-gold-700 italic">{product.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{product.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={requestHref} size="lg" arrow>
                {product.ctaLabel}
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary" size="lg">
                See how it works
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up mt-16 max-w-5xl [animation-delay:160ms]">
            <ProductMockup type={product.mockup} />
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <Section labelledBy="problem-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="problem-heading"
            eyebrow="The problem"
            title={product.problem.heading}
            description={product.problem.body}
          />
          <FadeIn>
            <ul className="divide-y divide-line border-y border-line">
              {product.problem.points.map((point) => (
                <li key={point} className="flex items-start gap-4 py-5 text-lg text-navy-900">
                  <Minus aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-gold-500" strokeWidth={2} />
                  <span className="font-serif">{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="navy" id="how-it-works" labelledBy="product-how-heading">
        <SectionHeading
          id="product-how-heading"
          dark
          eyebrow="How it works"
          title={`${product.name} in three steps.`}
        />
        <div className="mt-14">
          <Steps steps={product.steps} dark />
        </div>
      </Section>

      {/* BENEFITS */}
      <Section labelledBy="benefits-heading">
        <SectionHeading id="benefits-heading" eyebrow="Key benefits" title="What your team gets." />
        <div className="mt-14">
          <FeatureGrid items={product.benefits} columns={4} />
        </div>

        <FadeIn>
          <aside className="mt-20 flex flex-col gap-4 rounded-xl border border-gold-500/30 bg-gold-50/60 p-6 sm:flex-row sm:items-start sm:p-8">
            <Info aria-hidden="true" className="size-6 shrink-0 text-gold-700" strokeWidth={1.6} />
            <div>
              <h2 className="text-xl font-normal">Built for review, not blind reliance.</h2>
              <p className="mt-2 leading-relaxed text-ink">
                {product.name} produces suggestions to support a qualified lawyer&apos;s judgement. It is not legal
                advice, and output should always be reviewed before it is used.{" "}
                <Link href="/legal/disclaimer" className="text-gold-700 underline underline-offset-4">
                  Read our disclaimer
                </Link>
                .
              </p>
            </div>
          </aside>
        </FadeIn>
      </Section>

      {/* FAQ */}
      {product.faqs.length > 0 && (
        <Section tone="paper" labelledBy="product-faq-heading">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <SectionHeading id="product-faq-heading" eyebrow="FAQ" title={`About ${product.name}.`} />
            <FaqList items={product.faqs} />
          </div>
        </Section>
      )}

      {/* OTHER PRODUCTS */}
      <Section labelledBy="other-products-heading" className="pb-0 sm:pb-0">
        <Eyebrow className="mb-4">Explore more</Eyebrow>
        <h2 id="other-products-heading" className="text-3xl font-normal">
          Other Node.law tools
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {otherProducts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full items-start gap-4 rounded-xl border border-line p-5 transition-colors hover:border-navy-900/25 hover:bg-paper"
              >
                <Icon name={p.icon} className="mt-1 size-5 shrink-0 text-gold-700" />
                <span>
                  <span className="flex items-center gap-2 font-medium text-navy-900">
                    {p.name}
                    {p.status === "beta" && <Badge tone="gold">Beta</Badge>}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{p.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title={`Put ${product.name} to work.`}
        description="Request access and we'll set up a walkthrough using documents that reflect your practice."
        primary={{ label: product.ctaLabel, href: requestHref }}
        secondary={{ label: "Book a demo", href: "/contact" }}
      />
    </>
  );
}
