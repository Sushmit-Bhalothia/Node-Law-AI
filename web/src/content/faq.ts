/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS
   --------------------------------------------------------------------------
   ✏️  Edit questions and answers below.
   `showOnHome: true` also shows the question on the Home page (keep ~5).
   `category` groups questions on the FAQ page.
   ========================================================================== */

export const faqCategories = ["General", "Products", "Security & data", "Access"] as const;

export type Faq = {
  question: string;
  answer: string;
  category: (typeof faqCategories)[number];
  showOnHome?: boolean;
};

export const faqs: Faq[] = [
  // General
  {
    category: "General",
    showOnHome: true,
    question: "Is Node.law a law firm?",
    answer:
      "No. Node.law is a technology company. We build software tools for legal professionals. We do not provide legal advice, and using our tools does not create a lawyer–client relationship.",
  },
  {
    category: "General",
    showOnHome: true,
    question: "Does Node.law replace my lawyer?",
    answer:
      "No. Our tools are designed to make qualified lawyers faster and more consistent. Every draft, flag and suggested redline should be reviewed by a qualified lawyer before it is relied on.",
  },
  {
    category: "General",
    question: "Who is Node.law built for?",
    answer:
      "In-house counsel, law firms, solo practitioners and legal operations teams who handle recurring drafting and review work.",
  },
  {
    category: "General",
    question: "Which jurisdictions do you support?",
    answer:
      "At launch we focus on the UAE (onshore, DIFC and ADGM), the United Kingdom, the European Union and India. Coverage will expand over time.",
  },

  // Products
  {
    category: "Products",
    showOnHome: true,
    question: "Can I use my own templates and playbooks?",
    answer:
      "Yes. Review tools can be configured with your organisation's standard positions, and drafting tools can reflect your preferred clauses and style.",
  },
  {
    category: "Products",
    question: "Which file formats can I upload?",
    answer: "PDF and Microsoft Word (.docx). Drafts and marked-up documents can be exported to Word.",
  },
  {
    category: "Products",
    question: "How accurate is the output?",
    answer:
      "Our tools are built to be precise and to explain their reasoning, but AI can make mistakes. That's why every output links back to source text and is designed for lawyer review rather than blind acceptance.",
  },

  // Security & data
  {
    category: "Security & data",
    showOnHome: true,
    question: "Is my data used to train AI models?",
    answer:
      "No. Customer documents and outputs are never used to train AI models — ours or our providers'. See our Security & Trust page for details.",
  },
  {
    category: "Security & data",
    question: "Where is my data stored?",
    answer:
      "[PLACEHOLDER — confirm hosting regions before launch] Customer data is hosted in secure cloud data centres. Enterprise customers can discuss regional data residency options, including the UAE.",
  },
  {
    category: "Security & data",
    question: "Can we sign a Data Processing Addendum?",
    answer: "Yes. Our Data Processing Addendum is available on our Legal pages and can be executed as part of your agreement.",
  },
  {
    category: "Security & data",
    question: "Who at Node.law can see our documents?",
    answer:
      "Access to customer data is restricted to a small number of authorised personnel, only where needed to provide support you request, and every access is logged.",
  },

  // Access
  {
    category: "Access",
    showOnHome: true,
    question: "How do I get access?",
    answer:
      "We are onboarding legal teams in stages. Book a demo or request access and we'll be in touch to discuss your needs.",
  },
  {
    category: "Access",
    question: "Can we trial Node.law with our own documents?",
    answer:
      "Yes. Early-access customers can run the tools on their own agreements during onboarding, so you can judge the output on work you know well.",
  },
];
