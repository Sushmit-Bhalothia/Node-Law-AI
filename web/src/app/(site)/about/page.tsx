/* ==========================================================================
   ABOUT US  —  node.law/about
   ✏️  Text lives in src/content/about.ts
   ========================================================================== */

import Image from "next/image";
import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutHero, mission, principles, story, team } from "@/content/about";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Node.law is built by lawyers and engineers in Dubai to give legal teams precise, trustworthy AI tools — with lawyers always in control.",
  path: "/about",
});

function initials(name: string) {
  const letters = name
    .replace(/[\[\]]/g, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("");
  return letters.slice(0, 2).toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutHero.eyebrow} title={aboutHero.title} description={aboutHero.description} />

      {/* Mission */}
      <Section tone="navy" labelledBy="mission-heading">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="mission-heading" className="sr-only">
            Our mission
          </h2>
          <Eyebrow dark className="justify-center">
            {mission.eyebrow}
          </Eyebrow>
          <FadeIn>
            <p className="mt-8 font-serif text-3xl leading-snug text-white sm:text-[2.6rem] sm:leading-[1.2]">
              “{mission.statement}”
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Story */}
      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading id="story-heading" eyebrow={story.eyebrow} title={story.title} />
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              {story.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Principles */}
      <Section tone="paper" labelledBy="principles-heading">
        <SectionHeading id="principles-heading" eyebrow="What we believe" title="The principles behind every product." />
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <li key={principle.title}>
              <FadeIn delay={i * 70}>
                <div className="border-t border-navy-900/15 pt-6">
                  <span aria-hidden="true" className="font-serif text-3xl text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-normal">{principle.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{principle.body}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Section>

      {/* Team */}
      <Section labelledBy="team-heading">
        <SectionHeading
          id="team-heading"
          eyebrow="Our team"
          title="Lawyers and engineers, working side by side."
          description="A small, focused team combining legal practice with product and engineering experience."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <li key={`${member.role}-${i}`}>
              <FadeIn delay={i * 70} className="h-full">
                <article className="h-full rounded-xl border border-line p-6">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      width={96}
                      height={96}
                      className="size-20 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid size-20 place-items-center rounded-full border border-gold-500/30 bg-gold-50 font-serif text-2xl text-gold-700"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                  <h3 className="mt-5 text-xl font-normal">{member.name}</h3>
                  <p className="text-sm font-medium text-gold-700">{member.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{member.bio}</p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Section>

      {/* Location + careers */}
      <Section tone="paper" labelledBy="location-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-4">Where we are</Eyebrow>
            <h2 id="location-heading" className="text-3xl font-normal sm:text-4xl">
              Headquartered in {site.location.city}.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              From Dubai, we serve legal teams across the Gulf and internationally, with a focus on the UAE, the United
              Kingdom, the European Union and India.
            </p>
            <p className="mt-6 flex items-center gap-2 text-navy-900">
              <MapPin aria-hidden="true" className="size-5 text-gold-700" strokeWidth={1.6} />
              {site.location.address}
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white p-8 sm:p-10">
            <h3 className="text-2xl font-normal">Join us</h3>
            <p className="mt-3 leading-relaxed text-muted">
              We&apos;re hiring lawyers, engineers and designers who care about getting the details right.
            </p>
            <ButtonLink href="/careers" variant="secondary" arrow className="mt-6">
              View careers
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
