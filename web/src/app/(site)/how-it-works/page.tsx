/* ==========================================================================
   HOW IT WORKS  —  node.law/how-it-works
   ✏️  Text lives in src/content/how-it-works.ts
   ========================================================================== */

import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { howHero, phases, tracks } from "@/content/how-it-works";
import { responsibleAi } from "@/content/security";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "See how Node.law drafts and reviews legal documents: set your standards, analyse clause by clause, verify every suggestion and export to Word.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow={howHero.eyebrow} title={howHero.title} description={howHero.description}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" arrow>
            Book a demo
          </ButtonLink>
          <ButtonLink href="/products" variant="secondary" size="lg">
            Explore products
          </ButtonLink>
        </div>
      </PageHero>

      {/* Phases */}
      <Section labelledBy="phases-heading">
        <h2 id="phases-heading" className="sr-only">
          The four stages
        </h2>
        <ol className="space-y-6">
          {phases.map((phase, i) => (
            <li key={phase.title}>
              <FadeIn>
                <article className="grid gap-8 rounded-xl border border-line p-7 sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:gap-14">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="font-serif text-5xl leading-none text-gold-500" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-11 place-items-center rounded-lg border border-gold-500/30 bg-gold-50 text-gold-700">
                      <Icon name={phase.icon} className="size-5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal sm:text-3xl">
                      <span className="sr-only">Stage {i + 1}: </span>
                      {phase.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted">{phase.body}</p>
                  </div>
                  <ul className="space-y-3 border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-ink">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-700" strokeWidth={2} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Section>

      {/* Drafting vs review */}
      <Section tone="paper" labelledBy="tracks-heading">
        <SectionHeading id="tracks-heading" eyebrow={tracks.eyebrow} title={tracks.title} />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[tracks.drafting, tracks.review].map((track, t) => (
            <FadeIn key={track.title} delay={t * 100} className="h-full">
              <div className="h-full rounded-xl border border-line bg-white p-7 sm:p-9">
                <h3 className="text-2xl font-normal">{track.title}</h3>
                <p className="mt-1.5 text-muted">{track.description}</p>
                <ol className="mt-8 space-y-0">
                  {track.steps.map((step, i) => (
                    <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < track.steps.length - 1 && (
                        <span aria-hidden="true" className="absolute top-8 bottom-0 left-[15px] w-px bg-line" />
                      )}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold-500/40 bg-gold-50 text-sm font-medium text-gold-700">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-navy-900">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Human in the loop */}
      <Section tone="navy" labelledBy="principles-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <SectionHeading
              id="principles-heading"
              dark
              eyebrow="Human in the loop"
              title="Designed so a lawyer is always the final decision-maker."
            />
            <ButtonLink href="/security" variant="outlineLight" arrow className="mt-8">
              How we protect your data
            </ButtonLink>
          </div>
          <FeatureGrid
            dark
            columns={2}
            items={responsibleAi.map((item, i) => ({ ...item, icon: (["userCheck", "fileSearch", "shield"] as const)[i] ?? "check" }))}
          />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
