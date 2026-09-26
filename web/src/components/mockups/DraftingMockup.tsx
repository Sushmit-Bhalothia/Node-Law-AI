/* Illustration of the drafting tools (Terms & Conditions / Privacy Policy):
   a questionnaire on the left and the generated draft outline on the right. */

import { Check } from "lucide-react";
import { MockWindow } from "./MockWindow";

const variants = {
  terms: {
    title: "New draft — Terms of Service",
    label:
      "Illustration of Node.law Terms & Conditions Drafting: answers about a SaaS business in the DIFC on the left, and a generated terms of service outline with drafting notes on the right.",
    answers: [
      { q: "Business type", a: "B2B SaaS platform" },
      { q: "Customers", a: "Businesses only" },
      { q: "Payment model", a: "Annual subscription" },
      { q: "Governing law", a: "DIFC, Dubai" },
    ],
    docTitle: "Terms of Service",
    sections: ["Definitions", "Subscription & Fees", "Acceptable Use", "Limitation of Liability", "Termination", "Governing Law & Disputes"],
    highlight: 3,
    note: "Liability capped at 12 months' fees — consistent with your B2B subscription model.",
    chips: ["DIFC", "B2B", "Subscription"],
  },
  privacy: {
    title: "New draft — Privacy Policy",
    label:
      "Illustration of Node.law Privacy Policy Drafting: a data map of personal data categories on the left, and a generated privacy policy outline aligned to UAE PDPL and GDPR on the right.",
    answers: [
      { q: "Data collected", a: "Account, usage, payment" },
      { q: "Transfers", a: "UAE → EU (processor)" },
      { q: "Retention", a: "6 years after closure" },
      { q: "Applicable laws", a: "UAE PDPL · GDPR" },
    ],
    docTitle: "Privacy Policy",
    sections: ["Who we are", "Data we collect", "How we use your data", "International transfers", "Your rights", "Contact our DPO"],
    highlight: 3,
    note: "Transfer disclosure added for EU processor, with safeguards described.",
    chips: ["UAE PDPL", "GDPR", "Plain language"],
  },
};

export function DraftingMockup({ variant }: { variant: "terms" | "privacy" }) {
  const v = variants[variant];
  return (
    <MockWindow title={v.title} label={v.label}>
      <div className="grid @lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-line bg-paper/60 p-5 @lg:border-r @lg:border-b-0">
          <p className="text-xs font-semibold tracking-[0.14em] text-navy-900 uppercase">Your answers</p>
          <ul className="mt-4 space-y-2.5">
            {v.answers.map((item) => (
              <li key={item.q} className="rounded-lg border border-line bg-white px-3.5 py-2.5">
                <p className="text-[11px] text-muted">{item.q}</p>
                <p className="mt-0.5 flex items-center justify-between text-[13px] font-medium text-navy-900">
                  {item.a}
                  <Check className="size-3.5 text-risk-low" />
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-navy-900/10">
            <div className="h-full w-full rounded-full bg-gold-500" />
          </div>
          <p className="mt-2 text-[11px] text-muted">Questionnaire complete</p>
        </div>

        <div className="p-5 @md:p-6">
          <div className="flex flex-wrap gap-1.5">
            {v.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-gold-500/30 bg-gold-50 px-2 py-0.5 text-[11px] text-gold-700">
                {chip}
              </span>
            ))}
          </div>
          <p className="mt-4 font-serif text-xl text-navy-900">{v.docTitle}</p>
          <ol className="mt-3 space-y-1.5 font-serif text-[13px]">
            {v.sections.map((section, i) => (
              <li
                key={section}
                className={
                  i === v.highlight
                    ? "rounded-md border border-gold-500/40 bg-gold-50/70 px-2.5 py-2 text-navy-900"
                    : "px-2.5 py-1 text-ink"
                }
              >
                <span className="font-sans text-[11px] text-muted">{i + 1}.</span> {section}
                {i === v.highlight && (
                  <span className="mt-1.5 block font-sans text-[11px] leading-relaxed text-muted">
                    <span className="font-semibold text-gold-700">Drafting note · </span>
                    {v.note}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </MockWindow>
  );
}
