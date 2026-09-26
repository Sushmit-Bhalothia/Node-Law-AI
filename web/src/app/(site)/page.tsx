/* ==========================================================================
   HOME PAGE  —  node.law/
   ✏️  Text lives in src/content/home.ts (and products.ts, faq.ts, security.ts)
   ========================================================================== */

import { Check, Quote } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge, Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqList } from "@/components/sections/FaqList";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { ComingSoonGrid, ProductGrid } from "@/components/sections/ProductCards";
import { Steps } from "@/components/sections/Steps";
import { faqs } from "@/content/faq";
import {
  faqSection,
  hero,
  howItWorksSection,
  productsSection,
  testimonialsSection,
  trustSection,
  valueProps,
} from "@/content/home";
import { securityPillars } from "@/content/security";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name} — AI assistant tools for lawyers and legal teams`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const homeFaqs = faqs.filter((faq) => faq.showOnHome);

  return (
    <>
      {/* 1. HERO ------------------------------------------------------------ */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden="true"
          className="bg-ruled absolute inset-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_80%)]"
        />
        <Container className="relative pt-14 pb-20 sm:pt-24 sm:pb-28">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-6 justify-center">{hero.eyebrow}</Eyebrow>
            <h1
              id="hero-heading"
              className="text-[2.5rem] leading-[1.05] font-normal tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{hero.description}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={hero.primaryCta.href} size="lg" arrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm text-muted">
              {hero.trustLine.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-4 text-gold-700" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up mx-auto mt-16 max-w-5xl [animation-delay:180ms] sm:mt-20">
            <HeroCarousel />
          </div>
        </Container>
      </section>

      {/* 2. VALUE PROPOSITION ---------------------------------------------- */}
      <Section labelledBy="value-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            id="value-heading"
            eyebrow={valueProps.eyebrow}
            title={valueProps.title}
            description={valueProps.description}
          />
          <FeatureGrid items={valueProps.items} columns={2} />
        </div>
      </Section>

      {/* 3. PRODUCTS -------------------------------------------------------- */}
      <Section tone="paper" labelledBy="products-heading">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="products-heading"
            eyebrow={productsSection.eyebrow}
            title={productsSection.title}
            description={productsSection.description}
          />
          <ButtonLink href="/products" variant="secondary" arrow className="self-start sm:self-auto">
            All products
          </ButtonLink>
        </div>
        <div className="mt-14">
          <ProductGrid />
        </div>
        <div className="mt-16">
          <h3 className="mb-6 font-sans text-xs font-semibold tracking-[0.16em] text-muted uppercase">Coming soon</h3>
          <ComingSoonGrid />
        </div>
      </Section>

      {/* 4. HOW IT WORKS ---------------------------------------------------- */}
      <Section labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow={howItWorksSection.eyebrow}
          title={howItWorksSection.title}
          description={howItWorksSection.description}
        />
        <div className="mt-14">
          <Steps steps={howItWorksSection.steps} />
        </div>
        <ButtonLink href="/how-it-works" variant="text" arrow className="mt-12">
          See the full workflow
        </ButtonLink>
      </Section>

      {/* 5. TRUST & SECURITY ------------------------------------------------ */}
      <Section tone="navy" labelledBy="trust-heading">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="trust-heading"
            dark
            eyebrow={trustSection.eyebrow}
            title={trustSection.title}
            description={trustSection.description}
          />
          <ButtonLink href="/security" variant="outlineLight" arrow className="self-start lg:self-auto">
            Security &amp; Trust
          </ButtonLink>
        </div>
        <div className="mt-16 border-t border-white/10 pt-14">
          <FeatureGrid items={securityPillars.slice(0, 4)} columns={4} dark />
        </div>
      </Section>

      {/* 6. TESTIMONIALS (placeholder) -------------------------------------- */}
      <Section labelledBy="testimonials-heading">
        <SectionHeading
          id="testimonials-heading"
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i}>
              <FadeIn delay={i * 80} className="h-full">
                <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <Quote aria-hidden="true" className="size-6 text-gold-500" strokeWidth={1.4} />
                    {t.isPlaceholder && <Badge>Placeholder</Badge>}
                  </div>
                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-navy-900">
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5 text-sm">
                    <span className="block font-medium text-navy-900">{t.name}</span>
                    <span className="text-muted">
                      {t.role}, {t.organisation}
                    </span>
                  </figcaption>
                </figure>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. FAQ PREVIEW ----------------------------------------------------- */}
      <Section tone="paper" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionHeading
              id="faq-heading"
              eyebrow={faqSection.eyebrow}
              title={faqSection.title}
              description={faqSection.description}
            />
            <ButtonLink href="/faq" variant="secondary" arrow className="mt-8">
              View all FAQs
            </ButtonLink>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      {/* 8. FINAL CTA ------------------------------------------------------- */}
      <CtaBanner secondary={{ label: "Explore products", href: "/products" }} />
    </>
  );
}
