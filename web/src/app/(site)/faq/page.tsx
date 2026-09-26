/* ==========================================================================
   FAQ  —  node.law/faq
   ✏️  Questions live in src/content/faq.ts
   ========================================================================== */

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { faqCategories, faqs } from "@/content/faq";
import { slugify } from "@/lib/markdown";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about Node.law: what our AI tools do, how we protect confidential documents, supported jurisdictions and how to get access.",
  path: "/faq",
});

export default function FaqPage() {
  // Structured data lets search engines show these answers directly in results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Everything you need to know about Node.law. Can't find an answer? Our team is happy to help."
      />

      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Categories</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqCategories.map((category) => (
                <li key={category}>
                  <a
                    href={`#${slugify(category)}`}
                    className="block rounded-md border border-line px-3 py-1.5 text-[15px] text-navy-900 hover:bg-paper lg:border-0 lg:px-0 lg:hover:bg-transparent lg:hover:text-gold-700"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {faqCategories.map((category) => (
              <section key={category} aria-labelledby={slugify(category)}>
                <h2 id={slugify(category)} className="mb-4 text-3xl font-normal">
                  {category}
                </h2>
                <FaqList items={faqs.filter((faq) => faq.category === category)} />
              </section>
            ))}

            <div className="rounded-xl border border-line bg-paper p-8 sm:p-10">
              <h2 className="text-2xl font-normal">Still have questions?</h2>
              <p className="mt-2 text-muted">Get in touch and a member of our team will reply within one business day.</p>
              <ButtonLink href="/contact" arrow className="mt-6">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
