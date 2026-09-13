const documentTypes = [
  {
    name: "Non-Disclosure Agreement",
    description: "Protect confidential information shared between parties.",
  },
  {
    name: "Terms & Conditions",
    description: "Set the rules for using your website, app, or service.",
  },
  {
    name: "Privacy Policy",
    description: "Explain how you collect, use, and store personal data.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-20">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">Node Law AI</h1>
        <p className="text-lg text-black/60 dark:text-white/60">
          Draft legal documents like NDAs and Terms &amp; Conditions with AI.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {documentTypes.map((doc) => (
          <div
            key={doc.name}
            className="rounded-lg border border-black/10 p-5 dark:border-white/15"
          >
            <h2 className="font-medium">{doc.name}</h2>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
              {doc.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
