/* ==========================================================================
   SECURITY & TRUST  —  node.law/security
   ✏️  Text lives in src/content/security.ts
   ========================================================================== */

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { complianceRoadmap, responsibleAi, securityIntro, securityPillars } from "@/content/security";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Security & Trust",
  description:
    "How Node.law protects confidential legal documents: encryption, no training on customer data, data residency, access controls and our compliance roadmap.",
  path: "/security",
});

const documents = [
  { label: "Data Processing Addendum", href: "/legal/dpa" },
  { label: "Sub-processors", href: "/legal/sub-processors" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Acceptable Use & Responsible AI", href: "/legal/acceptable-use" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero eyebrow={securityIntro.eyebrow} title={securityIntro.title} description={securityIntro.description}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" arrow>
            Talk to our team
          </ButtonLink>
          <ButtonLink href="/legal/sub-processors" variant="secondary" size="lg">
            View sub-processors
          </ButtonLink>
        </div>
      </PageHero>

      {/* Pillars */}
      <Section labelledBy="pillars-heading">
        <SectionHeading
          id="pillars-heading"
          eyebrow="Our commitments"
          title="How we protect your information."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((pillar, i) => (
            <li key={pillar.title}>
              <FadeIn delay={(i % 3) * 70} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-line p-7">
                  <span className="grid size-11 place-items-center rounded-lg border border-gold-500/30 bg-gold-50 text-gold-700">
                    <Icon name={pillar.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-normal">{pillar.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{pillar.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-[15px] text-ink">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-700" strokeWidth={2} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Section>

      {/* Compliance roadmap */}
      <Section tone="paper" labelledBy="compliance-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            id="compliance-heading"
            eyebrow="Compliance roadmap"
            title="Independent assurance, on a clear timeline."
            description="We're transparent about where we are today and where we're heading. This roadmap is updated as milestones are reached."
          />
          <ul className="divide-y divide-line border-y border-line">
            {complianceRoadmap.map((item) => (
              <li key={item.name} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <h3 className="text-xl font-normal">{item.name}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{item.body}</p>
                </div>
                <span
                  className={cn(
                    "inline-flex h-fit items-center gap-1.5 self-start rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap",
                    item.status === "In place" && "border-risk-low/25 bg-risk-low-bg text-risk-low",
                    item.status === "In progress" && "border-gold-500/40 bg-gold-50 text-gold-700",
                    item.status !== "In place" && item.status !== "In progress" && "border-line bg-white text-muted",
                  )}
                >
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Responsible AI */}
      <Section tone="navy" labelledBy="responsible-ai-heading">
        <SectionHeading
          id="responsible-ai-heading"
          dark
          eyebrow="Responsible AI"
          title="AI that supports professional judgement — never replaces it."
        />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {responsibleAi.map((item) => (
            <li key={item.title} className="border-t border-white/15 pt-6">
              <h3 className="text-xl font-normal text-white">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-mist">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Documents + disclosure */}
      <Section labelledBy="documents-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="documents-heading" className="text-3xl font-normal">
              Legal &amp; compliance documents
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {documents.map((doc) => (
                <li key={doc.href}>
                  <Link href={doc.href} className="group flex items-center justify-between py-4 text-lg text-navy-900">
                    {doc.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-gold-700 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-paper p-7 sm:p-9">
            <h2 className="text-3xl font-normal">Report a vulnerability</h2>
            <p className="mt-4 leading-relaxed text-muted">
              If you believe you&apos;ve found a security issue in Node.law, please tell us privately. We appreciate
              responsible disclosure and will respond promptly.
            </p>
            <a
              href={`mailto:${site.securityEmail}`}
              className="mt-6 inline-flex items-center gap-2 font-medium text-gold-700 underline-offset-4 hover:underline"
            >
              {site.securityEmail}
            </a>
            <p className="mt-6 text-sm text-muted">
              Security questionnaires and due diligence requests are welcome from prospective customers.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Have security questions?"
        description="Our team can walk your information security and procurement stakeholders through our controls."
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
