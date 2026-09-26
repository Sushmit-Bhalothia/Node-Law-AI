/* ==========================================================================
   CAREERS  —  node.law/careers
   ✏️  Text and job listings live in src/content/careers.ts
   ========================================================================== */

import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge, Section, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { careersHero, openRoles, whyJoin } from "@/content/careers";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Node.law in Dubai. We're hiring legal engineers, software engineers and designers to build AI tools lawyers can trust.",
  path: "/careers",
});

export default function CareersPage() {
  const applyHref = (role: string) =>
    `mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${role}`)}`;

  return (
    <>
      <PageHero eyebrow={careersHero.eyebrow} title={careersHero.title} description={careersHero.description}>
        <a href="#open-roles" className={buttonClasses({ size: "lg" })}>
          View open roles
        </a>
      </PageHero>

      <Section labelledBy="why-heading">
        <SectionHeading id="why-heading" eyebrow="Why Node.law" title="A place to do careful, meaningful work." />
        <div className="mt-14">
          <FeatureGrid items={whyJoin} columns={4} />
        </div>
      </Section>

      <Section tone="paper" id="open-roles" labelledBy="roles-heading">
        <SectionHeading id="roles-heading" eyebrow="Open roles" title="Current opportunities." />

        {openRoles.length === 0 ? (
          <p className="mt-10 text-lg text-muted">
            We don&apos;t have any open roles right now, but we&apos;re always happy to hear from exceptional people.
          </p>
        ) : (
          <ul className="mt-12 space-y-4">
            {openRoles.map((role, i) => (
              <li key={role.title}>
                <FadeIn delay={i * 60}>
                  <article className="flex flex-col gap-6 rounded-xl border border-line bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge tone="gold">{role.team}</Badge>
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                          <MapPin aria-hidden="true" className="size-4" strokeWidth={1.6} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                          <Briefcase aria-hidden="true" className="size-4" strokeWidth={1.6} />
                          {role.type}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-normal">{role.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{role.summary}</p>
                    </div>
                    <a href={applyHref(role.title)} className={buttonClasses({ variant: "secondary" })}>
                      Apply
                      <span className="sr-only"> for {role.title}</span>
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 rounded-xl border border-dashed border-navy-900/20 p-8 text-center">
          <h3 className="text-2xl font-normal">Don&apos;t see the right role?</h3>
          <p className="mx-auto mt-2 max-w-lg text-muted">
            Send us a note about yourself and what you&apos;d like to work on.
          </p>
          <a
            href={`mailto:${site.careersEmail}`}
            className="mt-5 inline-block font-medium text-gold-700 underline-offset-4 hover:underline"
          >
            {site.careersEmail}
          </a>
        </div>
      </Section>
    </>
  );
}
