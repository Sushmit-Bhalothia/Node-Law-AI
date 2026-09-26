/* ==========================================================================
   HOW IT WORKS PAGE TEXT
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export const howHero = {
  eyebrow: "How it works",
  title: "A careful workflow, with a lawyer at every decision point.",
  description:
    "Node.law follows the same logic an experienced lawyer would: understand the context, apply your standards, and surface what needs judgement. Here's what happens at each stage.",
};

export const phases: { title: string; body: string; icon: IconName; points: string[] }[] = [
  {
    title: "Set your standards",
    icon: "book",
    body: "Start with Node.law's baseline positions or configure your own. Your playbook becomes the benchmark for every review and draft.",
    points: [
      "Preferred and fallback positions for key clauses",
      "Jurisdictions, governing law and dispute resolution preferences",
      "House style for defined terms and drafting conventions",
    ],
  },
  {
    title: "Draft or review",
    icon: "fileSearch",
    body: "Upload a document for review, or complete a guided questionnaire for a new draft. Node.law analyses the text clause by clause.",
    points: [
      "Clauses identified and classified, even in unfamiliar formats",
      "Each clause compared against your standard position",
      "Tailored drafts assembled from your answers and approved clauses",
    ],
  },
  {
    title: "Verify and decide",
    icon: "userCheck",
    body: "Every flag, redline and drafting choice comes with reasoning and a link to the source text, so verification takes seconds, not hours.",
    points: [
      "Risk ratings: high, medium and low",
      "Accept, edit or reject each suggestion individually",
      "Nothing is finalised without your approval",
    ],
  },
  {
    title: "Export and share",
    icon: "download",
    body: "Export clean or marked-up Word documents and share plain-language summaries with business stakeholders.",
    points: [
      "Word (.docx) export with tracked changes",
      "Summaries written for non-lawyers",
      "Consistent outputs across your whole team",
    ],
  },
];

export const tracks = {
  eyebrow: "Two kinds of tools",
  title: "Drafting and review, one consistent approach.",
  drafting: {
    title: "Drafting tools",
    description: "Terms & Conditions and Privacy Policy Drafting",
    steps: ["Answer guided questions", "Generate a tailored draft with notes", "Refine and export"],
  },
  review: {
    title: "Review tools",
    description: "NDA Review and Contract Review",
    steps: ["Upload the agreement", "Get flags, deviations and redlines", "Decide and export mark-up"],
  },
};
