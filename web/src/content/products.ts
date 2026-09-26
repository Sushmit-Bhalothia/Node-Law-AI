/* ==========================================================================
   PRODUCTS — the single source of truth for every product on the site
   --------------------------------------------------------------------------
   Each entry below automatically creates:
     • a card on the Home and Products pages
     • a link in the header "Products" menu and the footer
     • its own page at /products/<slug>
     • an entry in sitemap.xml

   ➕ TO ADD A PRODUCT: copy one whole block { ... }, paste it at the end of
      the list, and change the text. The `slug` becomes the web address, so use
      lowercase words joined by hyphens (e.g. "dpa-review").
   🔜 TO ANNOUNCE A FUTURE PRODUCT: add it to `comingSoon` at the bottom.

   `icon`   — one of the names listed in src/components/ui/Icon.tsx
   `mockup` — which illustration to show: "nda" | "terms" | "privacy" | "contract"
   `status` — "live" or "beta"
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export type Product = {
  slug: string;
  name: string;
  /** Short label used on the homepage carousel tabs. Keep it to 2–3 words. */
  shortName: string;
  status: "live" | "beta";
  icon: IconName;
  mockup: "nda" | "terms" | "privacy" | "contract";
  tagline: string;
  summary: string;
  problem: { heading: string; body: string; points: string[] };
  steps: { title: string; body: string }[];
  benefits: { title: string; body: string; icon: IconName }[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
  seo: { title: string; description: string };
};

export const products: Product[] = [
  /* ---------------------------------------------------------------------- */
  {
    slug: "terms-and-conditions",
    name: "Terms & Conditions Drafting",
    shortName: "Terms & Conditions",
    status: "live",
    icon: "filePen",
    mockup: "terms",
    tagline: "Terms tailored to how your business actually operates.",
    summary:
      "Answer structured questions about your business, product and markets. Get a first draft of terms and conditions that reflects your model — not someone else's template.",
    problem: {
      heading: "Templates don't know your business.",
      body: "Generic terms miss the details that matter: subscription mechanics, consumer protections, liability positions and governing law. Adapting them by hand takes hours of senior time, and copied clauses carry risks nobody has reviewed.",
      points: [
        "Off-the-shelf templates ignore your business model and jurisdiction",
        "Manual tailoring is slow and inconsistent across products",
        "Clauses borrowed from other businesses create unreviewed risk",
      ],
    },
    steps: [
      {
        title: "Describe your business",
        body: "A guided questionnaire captures your business type, product, customer base (B2B or consumer), payment model and target jurisdictions.",
      },
      {
        title: "Generate a tailored draft",
        body: "Node.law assembles a structured draft, selecting clauses and positions that fit your answers, with drafting notes explaining each key choice.",
      },
      {
        title: "Review, refine and export",
        body: "Edit clauses, compare alternative positions and export to Word once a qualified lawyer has reviewed the final text.",
      },
    ],
    benefits: [
      {
        title: "Jurisdiction-aware",
        body: "Drafts account for where you operate — including UAE onshore, DIFC, ADGM, the UK, the EU and India.",
        icon: "globe",
      },
      {
        title: "Drafting notes on key clauses",
        body: "Understand why a limitation of liability or termination right was drafted the way it was.",
        icon: "message",
      },
      {
        title: "Consistent across products",
        body: "Keep defined terms, positions and tone aligned when you run more than one product or brand.",
        icon: "layers",
      },
      {
        title: "Ready for your workflow",
        body: "Export clean Word documents your team can mark up, approve and publish.",
        icon: "download",
      },
    ],
    faqs: [
      {
        question: "Can I use the draft without a lawyer reviewing it?",
        answer:
          "No. Every draft is a starting point. It should be reviewed and approved by a qualified lawyer before it is published or relied on.",
      },
      {
        question: "Which types of business does it support?",
        answer:
          "At launch: SaaS and software, e-commerce, marketplaces, mobile apps and professional services. More business types will follow.",
      },
    ],
    ctaLabel: "Request access",
    seo: {
      title: "Terms & Conditions Drafting",
      description:
        "Draft tailored terms and conditions based on your business type, product and jurisdiction — with drafting notes on every key clause.",
    },
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "privacy-policy",
    name: "Privacy Policy Drafting",
    shortName: "Privacy Policy",
    status: "live",
    icon: "shield",
    mockup: "privacy",
    tagline: "Privacy policies built from your real data practices.",
    summary:
      "Map what personal data you collect, why, and where it goes. Node.law drafts a privacy policy structured around the laws that apply to you — from the UAE PDPL and DIFC Data Protection Law to GDPR and India's DPDP Act.",
    problem: {
      heading: "A privacy policy is only as good as the data map behind it.",
      body: "Policies copied from elsewhere rarely match what a business actually does with personal data. As regulators across the UAE, Europe and India increase scrutiny, inaccurate disclosures become a real liability.",
      points: [
        "Disclosures that don't match actual processing activities",
        "Overlapping obligations across multiple data protection regimes",
        "Policies that fall out of date as products and vendors change",
      ],
    },
    steps: [
      {
        title: "Map your data practices",
        body: "Tell us which personal data you collect, the purposes, who you share it with, where it's transferred and how long you keep it.",
      },
      {
        title: "Select applicable laws",
        body: "Choose the regimes that apply — such as UAE PDPL, DIFC DPL 2020, ADGM DPR 2021, GDPR/UK GDPR or the DPDP Act 2023 — and Node.law structures the required disclosures.",
      },
      {
        title: "Review and publish",
        body: "Refine the plain-language draft, confirm it with your privacy counsel and export it for publication.",
      },
    ],
    benefits: [
      {
        title: "Structured around applicable law",
        body: "Disclosures are organised against the requirements of each regime you select.",
        icon: "scale",
      },
      {
        title: "Plain language by default",
        body: "Clear, readable policies that meet transparency expectations without legalese.",
        icon: "book",
      },
      {
        title: "Cross-border transfers covered",
        body: "Prompts for transfer destinations and safeguards so nothing is left out.",
        icon: "globe",
      },
      {
        title: "Easy to keep current",
        body: "Update your data map and regenerate affected sections when your practices change.",
        icon: "history",
      },
    ],
    faqs: [
      {
        question: "Does using this make my business compliant?",
        answer:
          "No tool can guarantee compliance. The policy reflects the information you provide, and a qualified lawyer should confirm it is accurate and complete for your circumstances.",
      },
      {
        question: "Can one policy cover several jurisdictions?",
        answer:
          "Yes. You can select multiple regimes and Node.law will structure the policy to address each, flagging where requirements differ.",
      },
    ],
    ctaLabel: "Request access",
    seo: {
      title: "Privacy Policy Drafting",
      description:
        "Draft privacy policies structured around UAE PDPL, DIFC, ADGM, GDPR and India's DPDP Act — built from your actual data practices.",
    },
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "nda-review",
    name: "NDA Review",
    shortName: "NDA Review",
    status: "live",
    icon: "scan",
    mockup: "nda",
    tagline: "Clause-by-clause NDA review against your standard position.",
    summary:
      "Upload an NDA and get risk-rated flags, deviations from your playbook and suggested redlines — so routine agreements move quickly and the unusual ones get proper attention.",
    problem: {
      heading: "NDAs are high-volume, low-margin — and easy to get wrong.",
      body: "Legal teams review the same agreement types again and again, yet a single broad definition, missing carve-out or long non-solicit can create outsized exposure. Reviewing everything manually slows the business down.",
      points: [
        "Repetitive review work consumes senior lawyer time",
        "Inconsistent positions across reviewers and matters",
        "Subtle deviations slip through under time pressure",
      ],
    },
    steps: [
      {
        title: "Upload the NDA",
        body: "Drop in a PDF or Word document — mutual or one-way, your paper or the counterparty's.",
      },
      {
        title: "Check against your playbook",
        body: "Every clause is compared with your standard position: definitions, term, carve-outs, permitted disclosures, non-solicitation, remedies, governing law and more.",
      },
      {
        title: "Act on flags and redlines",
        body: "Review risk-rated flags with the reasoning behind them, accept or edit suggested redlines, and export a marked-up Word document.",
      },
    ],
    benefits: [
      {
        title: "Risk flags with reasons",
        body: "Each flag is rated high, medium or low and linked to the exact clause text.",
        icon: "target",
      },
      {
        title: "Deviations from your standard",
        body: "See precisely where the NDA departs from your playbook and by how much.",
        icon: "compare",
      },
      {
        title: "Suggested redlines",
        body: "Proposed amendments drafted in your preferred style, ready for your judgement.",
        icon: "pen",
      },
      {
        title: "Faster turnaround",
        body: "Clear routine NDAs in minutes and escalate only what genuinely needs attention.",
        icon: "clock",
      },
    ],
    faqs: [
      {
        question: "Can I use my own NDA playbook?",
        answer:
          "Yes. You can start from Node.law's standard positions and adjust them, or configure your organisation's own playbook.",
      },
      {
        question: "Which file formats are supported?",
        answer: "PDF and Microsoft Word (.docx). Scanned PDFs are supported where the text is legible.",
      },
    ],
    ctaLabel: "Request access",
    seo: {
      title: "NDA Review",
      description:
        "Upload an NDA and get clause-by-clause risk flags, deviations from your standard position and suggested redlines in minutes.",
    },
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "contract-review",
    name: "Contract Review",
    shortName: "Contract Review",
    status: "beta",
    icon: "fileSearch",
    mockup: "contract",
    tagline: "A structured first review of commercial agreements.",
    summary:
      "Review MSAs, SaaS, services and supply agreements with a key-terms summary, a prioritised issues list and positions drawn from your playbook.",
    problem: {
      heading: "Commercial contracts deserve focus, not first-pass drudgery.",
      body: "Before any real negotiation, lawyers spend hours locating key terms, reading definitions and building issues lists. That first pass is necessary — but it's rarely where their expertise adds the most value.",
      points: [
        "Long agreements with obligations scattered across schedules",
        "Issues lists rebuilt from scratch for every contract",
        "Business stakeholders waiting on a summary they can understand",
      ],
    },
    steps: [
      {
        title: "Upload the agreement",
        body: "Add the contract and any schedules, and tell us which side you're on.",
      },
      {
        title: "Extract terms and issues",
        body: "Node.law summarises key terms — liability, indemnities, termination, payment, IP and data protection — and identifies issues against your positions.",
      },
      {
        title: "Prioritise and negotiate",
        body: "Work through a prioritised issues list with suggested fallback positions and share a plain-language summary with the business.",
      },
    ],
    benefits: [
      {
        title: "Key terms at a glance",
        body: "A structured summary of the commercial and legal terms that matter most.",
        icon: "list",
      },
      {
        title: "Prioritised issues list",
        body: "Issues ranked by risk, with clause references and suggested positions.",
        icon: "clipboard",
      },
      {
        title: "Playbook-driven",
        body: "Positions and fallbacks reflect your organisation's risk appetite.",
        icon: "book",
      },
      {
        title: "Business-ready summaries",
        body: "Explain what a contract means for stakeholders without rewriting your notes.",
        icon: "message",
      },
    ],
    faqs: [
      {
        question: "What does “Beta” mean?",
        answer:
          "Contract Review is available to early-access customers while we expand the agreement types it supports. Feedback from beta users directly shapes the product.",
      },
      {
        question: "Which agreements are supported?",
        answer:
          "Currently master services agreements, SaaS subscription agreements, professional services and supply agreements.",
      },
    ],
    ctaLabel: "Join the beta",
    seo: {
      title: "Contract Review (Beta)",
      description:
        "Review commercial agreements with a key-terms summary, a prioritised issues list and playbook-driven positions.",
    },
  },
];

/* ==========================================================================
   COMING SOON — placeholder cards for future tools
   ========================================================================== */
export const comingSoon: { name: string; description: string; icon: IconName }[] = [
  {
    name: "DPA Review",
    description: "Review data processing agreements against GDPR, UAE PDPL and your privacy positions.",
    icon: "fileLock",
  },
  {
    name: "Contract Comparison",
    description: "Compare two versions of an agreement and see every material change explained.",
    icon: "compare",
  },
  {
    name: "Clause Library",
    description: "Store approved clauses and fallback positions your whole team can draft from.",
    icon: "library",
  },
  {
    name: "Regulatory Tracker",
    description: "Follow regulatory developments relevant to your business across key jurisdictions.",
    icon: "radar",
  },
];

/** Finds a product by its slug (used by the product pages). */
export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
