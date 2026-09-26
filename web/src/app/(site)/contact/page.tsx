/* ==========================================================================
   CONTACT / BOOK A DEMO  —  node.law/contact
   ✏️  Edit the intro text below. The form is in components/forms/ContactForm.tsx
   ========================================================================== */

import { Suspense } from "react";
import { Check, Clock, Mail, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactFormFromUrl } from "@/components/forms/ContactFormFromUrl";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Demo",
  description:
    "Book a demo of Node.law or contact our team about AI drafting and review tools for your legal team.",
  path: "/contact",
});

const demoIncludes = [
  "A walkthrough of the tools most relevant to your practice",
  "Sample NDAs and contracts reviewed live",
  "Answers to your security and data protection questions",
  "A discussion of early access for your team",
];

export default function ContactPage() {
  return (
    <div className="bg-ruled border-b border-line bg-paper">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div className="animate-fade-up">
            <Eyebrow className="mb-5">Contact</Eyebrow>
            <h1 className="text-4xl leading-[1.08] font-normal tracking-tight sm:text-5xl">
              Book a demo or get in touch.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tell us about your team and the work you&apos;d like to streamline. We&apos;ll arrange a 30-minute
              session tailored to your practice.
            </p>

            <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.16em] text-navy-900 uppercase">
              Your demo includes
            </h2>
            <ul className="mt-5 space-y-3">
              {demoIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-700" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-12 space-y-5 border-t border-line pt-8">
              <div className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 text-gold-700" strokeWidth={1.6} />
                <div>
                  <dt className="text-sm text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-navy-900 underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 text-gold-700" strokeWidth={1.6} />
                <div>
                  <dt className="text-sm text-muted">Office</dt>
                  <dd className="text-navy-900">{site.location.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-5 text-gold-700" strokeWidth={1.6} />
                <div>
                  <dt className="text-sm text-muted">Response time</dt>
                  <dd className="text-navy-900">Within one business day (Sunday–Friday, GST)</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
}
