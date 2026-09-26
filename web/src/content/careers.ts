/* ==========================================================================
   CAREERS PAGE TEXT
   --------------------------------------------------------------------------
   ➕ To add a job: copy one { ... } block in `openRoles` and edit it.
   ➖ To remove a job: delete its block. If the list is empty, the page shows
      a "no open roles" message automatically.
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export const careersHero = {
  eyebrow: "Careers",
  title: "Help build the tools lawyers will rely on.",
  description:
    "We're a small team in Dubai working on hard problems at the intersection of law, language and software. If you care about craft and getting the details right, we'd like to hear from you.",
};

export const whyJoin: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Meaningful work",
    body: "Build tools that professionals use for consequential decisions every day.",
    icon: "scale",
  },
  {
    title: "Lawyers and engineers, side by side",
    body: "Legal expertise and technical excellence shape every product decision together.",
    icon: "users",
  },
  {
    title: "Ownership from day one",
    body: "Early team members shape the product, the culture and the company.",
    icon: "target",
  },
  {
    title: "Based in Dubai",
    body: "A growing legal tech hub with a global outlook. Hybrid working for most roles. [PLACEHOLDER — confirm]",
    icon: "globe",
  },
];

export const openRoles: { title: string; team: string; location: string; type: string; summary: string }[] = [
  {
    title: "Legal Engineer",
    team: "Legal",
    location: "Dubai (Hybrid)",
    type: "Full-time",
    summary:
      "[PLACEHOLDER] A qualified lawyer who enjoys structuring legal knowledge — playbooks, clause logic and evaluation — to make our tools more precise.",
  },
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Dubai (Hybrid)",
    type: "Full-time",
    summary:
      "[PLACEHOLDER] Build secure, reliable product features end to end, from document processing pipelines to the review interface.",
  },
  {
    title: "Founding Product Designer",
    team: "Design",
    location: "Dubai (Hybrid)",
    type: "Full-time",
    summary: "[PLACEHOLDER] Design calm, precise interfaces for complex legal workflows.",
  },
];
