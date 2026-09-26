/* ==========================================================================
   ABOUT PAGE TEXT
   --------------------------------------------------------------------------
   ✏️  Items marked [PLACEHOLDER] need your real story and team details.
   Team photos: put image files in /public/team/ and set `photo: "/team/name.jpg"`.
   Leave `photo` empty to show the person's initials instead.
   ========================================================================== */

export const aboutHero = {
  eyebrow: "About Node.law",
  title: "Built by lawyers, for the way legal work is really done.",
  description:
    "We're a team of lawyers and engineers based in Dubai, building precise, trustworthy AI tools that help legal teams do their best work — faster, and without compromising the standards the profession depends on.",
};

export const mission = {
  eyebrow: "Our mission",
  statement:
    "To give every legal team the leverage of a much larger one — while keeping lawyers firmly in control of the judgement that matters.",
};

export const story = {
  eyebrow: "Why lawyers built this",
  title: "We lived the problem before we built the solution.",
  paragraphs: [
    "[PLACEHOLDER] Tell the founding story here. For example: our founders spent years as in-house counsel and law firm lawyers across the Gulf, the UK and India, reviewing the same NDAs and rewriting the same terms again and again.",
    "[PLACEHOLDER] Describe the moment you realised general-purpose AI tools weren't built for legal work — they were confident, but not careful, and they didn't explain themselves.",
    "[PLACEHOLDER] Explain what makes Node.law different: tools shaped by legal reasoning, grounded in a team's own positions, and designed so a lawyer can verify every suggestion in seconds.",
  ],
};

export const principles: { title: string; body: string }[] = [
  {
    title: "Precision over speed",
    body: "Speed matters, but never at the expense of getting it right. We'd rather flag uncertainty than hide it.",
  },
  {
    title: "Lawyers decide",
    body: "Our tools support professional judgement. They are never a substitute for it.",
  },
  {
    title: "Confidential by default",
    body: "We handle every document as though it were privileged — because for our customers, it often is.",
  },
  {
    title: "Explain, don't obscure",
    body: "Every output should show its working, so it can be checked, challenged and trusted.",
  },
];

export const team: { name: string; role: string; bio: string; photo?: string }[] = [
  {
    name: "[Founder Name]",
    role: "Co-founder & CEO",
    bio: "[PLACEHOLDER] Former in-house counsel. Add a one-sentence background.",
  },
  {
    name: "[Founder Name]",
    role: "Co-founder & CTO",
    bio: "[PLACEHOLDER] Engineering leader. Add a one-sentence background.",
  },
  {
    name: "[Team Member]",
    role: "Head of Legal Engineering",
    bio: "[PLACEHOLDER] Qualified lawyer. Add a one-sentence background.",
  },
  {
    name: "[Team Member]",
    role: "Founding Product Designer",
    bio: "[PLACEHOLDER] Add a one-sentence background.",
  },
];
