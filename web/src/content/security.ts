/* ==========================================================================
   SECURITY & TRUST — text for the Security page and the Home page trust strip
   --------------------------------------------------------------------------
   ⚠️  IMPORTANT: every statement below is a public commitment to customers.
       Confirm each one is accurate with your engineering team before launch.
       Items marked [PLACEHOLDER] still need real details.
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export const securityIntro = {
  eyebrow: "Security & Trust",
  title: "Built for the confidentiality legal work demands.",
  description:
    "Lawyers are custodians of their clients' most sensitive information. Node.law is designed from the ground up to protect it — with strict controls on how data is stored, accessed and used.",
};

/* Pillars — shown as cards (the first four also appear on the Home page) */
export const securityPillars: { title: string; body: string; icon: IconName; details: string[] }[] = [
  {
    title: "Encryption everywhere",
    icon: "lock",
    body: "Data is encrypted in transit and at rest, using industry-standard protocols and managed keys.",
    details: [
      "TLS 1.2+ for all data in transit",
      "AES-256 encryption for data at rest",
      "Keys managed through a dedicated key management service",
    ],
  },
  {
    title: "No training on your data",
    icon: "eyeOff",
    body: "Your documents, prompts and outputs are never used to train AI models — ours or any provider's.",
    details: [
      "Contractual zero-training commitments with AI model providers",
      "Customer content is processed only to deliver the service",
      "No human review of your content without your permission",
    ],
  },
  {
    title: "Data residency",
    icon: "globe",
    body: "Choose where your data lives. Regional hosting options support local regulatory requirements.",
    details: [
      "[PLACEHOLDER] Primary hosting region to be confirmed",
      "UAE-region hosting available for Enterprise customers [PLACEHOLDER — confirm]",
      "Sub-processors and their locations published transparently",
    ],
  },
  {
    title: "Access controls",
    icon: "key",
    body: "Granular permissions ensure the right people see the right matters — and nobody else.",
    details: [
      "Role-based access control at workspace and matter level",
      "Single sign-on (SAML) and multi-factor authentication",
      "Detailed audit logs of user and administrator activity",
    ],
  },
  {
    title: "Confidentiality by design",
    icon: "fileLock",
    body: "Workspaces are logically isolated, and internal access to customer data is exceptional and logged.",
    details: [
      "Logical tenant isolation for every customer",
      "Least-privilege internal access, reviewed regularly",
      "Confidentiality obligations for all personnel",
    ],
  },
  {
    title: "Retention you control",
    icon: "database",
    body: "Decide how long documents are kept. Delete matters at any time, and data is purged on termination.",
    details: [
      "Configurable retention periods per workspace",
      "User-initiated deletion of documents and outputs",
      "Secure deletion from backups within a defined window [PLACEHOLDER — confirm period]",
    ],
  },
];

/* Compliance roadmap — update `status` as certifications progress.
   Suggested statuses: "In place", "In progress", "Planned" */
export const complianceRoadmap: { name: string; status: string; body: string }[] = [
  {
    name: "ISO/IEC 27001",
    status: "In progress",
    body: "Information security management system aligned to ISO/IEC 27001. [PLACEHOLDER — target date]",
  },
  {
    name: "SOC 2 Type II",
    status: "Planned",
    body: "Independent audit of security, availability and confidentiality controls. [PLACEHOLDER — target date]",
  },
  {
    name: "UAE PDPL & DIFC DPL",
    status: "In progress",
    body: "Processing practices aligned with UAE Federal Decree-Law No. 45 of 2021 and the DIFC Data Protection Law No. 5 of 2020.",
  },
  {
    name: "GDPR & DPDP Act",
    status: "In progress",
    body: "Support for customers subject to the EU/UK GDPR and India's Digital Personal Data Protection Act 2023.",
  },
];

/* Responsible AI principles */
export const responsibleAi: { title: string; body: string }[] = [
  {
    title: "Lawyers stay in control",
    body: "Our tools suggest; qualified professionals decide. Nothing is sent, signed or published without human review.",
  },
  {
    title: "Transparent reasoning",
    body: "Flags and suggestions reference the source text and explain why they were raised.",
  },
  {
    title: "Clear limitations",
    body: "We are upfront that AI can make mistakes, and we design workflows that make review easy.",
  },
];
