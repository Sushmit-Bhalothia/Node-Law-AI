/* ==========================================================================
   HOME PAGE TEXT
   --------------------------------------------------------------------------
   ✏️  Edit the headings and paragraphs shown on the Home page.
   Product cards come from products.ts, FAQs from faq.ts, and the security
   highlights from security.ts.
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export const hero = {
  eyebrow: "AI assistant tools for legal teams",
  title: "Legal work, drafted and reviewed with precision.",
  description:
    "Node.law gives in-house counsel and law firms AI tools to draft terms and privacy policies and to review NDAs and commercial contracts — with every output explained, traceable and yours to approve.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "Explore products", href: "/products" },
  trustLine: ["Built with practising lawyers", "No training on your data", "Designed for GCC, UK, EU & India"],
};

export const valueProps: { eyebrow: string; title: string; description: string; items: { title: string; body: string; icon: IconName }[] } = {
  eyebrow: "Why Node.law",
  title: "Designed around how lawyers actually work.",
  description:
    "Not a chatbot bolted onto a document. Structured tools that follow the logic of legal drafting and review.",
  items: [
    {
      title: "Grounded in your positions",
      body: "Reviews are measured against your playbook and preferred clauses — not generic assumptions about what's “market”.",
      icon: "target",
    },
    {
      title: "Every flag explained",
      body: "Each issue points to the exact clause, the deviation from your standard and the reasoning behind the suggestion.",
      icon: "fileSearch",
    },
    {
      title: "You make the call",
      body: "Suggestions are just that. Accept, edit or reject each one — the professional judgement always stays with you.",
      icon: "userCheck",
    },
  ],
};

export const productsSection = {
  eyebrow: "Products",
  title: "Focused tools for recurring legal work.",
  description: "Start with the drafting and review tasks that consume the most time. More tools are on the way.",
};

export const howItWorksSection = {
  eyebrow: "How it works",
  title: "From document to decision in three steps.",
  description: "A consistent workflow across every Node.law tool.",
  steps: [
    {
      title: "Provide the context",
      body: "Upload a document for review, or answer a short guided questionnaire for a new draft.",
    },
    {
      title: "Get structured output",
      body: "Receive risk-rated flags, suggested redlines or a tailored draft — each with clear reasoning.",
    },
    {
      title: "Review and finalise",
      body: "Accept, edit or reject each suggestion, then export to Word for signature or publication.",
    },
  ],
};

export const trustSection = {
  eyebrow: "Security & Trust",
  title: "Confidentiality is the foundation, not a feature.",
  description:
    "We treat your documents the way you do: as privileged, sensitive and never to be used for anything other than the work you asked for.",
};

export const testimonialsSection = {
  eyebrow: "Early feedback",
  title: "What legal teams are saying.",
};

export const faqSection = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  description: "The essentials about how Node.law works and how we handle your data.",
};

export const finalCta = {
  title: "See Node.law on your own documents.",
  description:
    "Book a 30-minute demo with our team. We'll walk through the tools using sample agreements that reflect your practice.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "Talk to us", href: "/contact" },
};
