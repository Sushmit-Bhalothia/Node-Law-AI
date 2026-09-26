import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { finalCta } from "@/content/home";

/** The dark "Book a demo" band shown near the bottom of most pages. */
export function CtaBanner({
  title = finalCta.title,
  description = finalCta.description,
  primary = finalCta.primaryCta,
  secondary,
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-heading" className="py-20 sm:py-24">
      <Container>
        <div
          data-tone="dark"
          className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-14 sm:px-14 sm:py-20"
        >
          {/* Decorative gold hairlines */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 h-[140%] w-auto opacity-40"
            viewBox="0 0 400 400"
            fill="none"
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx="400" cy="200" r={60 + i * 40} stroke="#C9A56A" strokeOpacity={0.35 - i * 0.04} />
            ))}
          </svg>
          <div className="relative max-w-2xl">
            <h2 id="cta-heading" className="text-3xl leading-tight font-normal text-white sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="light" size="lg" arrow>
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="outlineLight" size="lg">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
