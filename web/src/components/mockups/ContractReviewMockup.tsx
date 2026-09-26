/* Illustration of the Contract Review tool: a key terms table and issues list. */

import { MockWindow, RiskPill } from "./MockWindow";

const terms: { term: string; value: string; level: "high" | "medium" | "low" }[] = [
  { term: "Limitation of liability", value: "Uncapped for data breaches", level: "high" },
  { term: "Term & renewal", value: "3 years, auto-renews", level: "medium" },
  { term: "Payment terms", value: "Net 45 days", level: "medium" },
  { term: "IP ownership", value: "Customer owns deliverables", level: "low" },
  { term: "Governing law", value: "ADGM, Abu Dhabi", level: "low" },
];

export function ContractReviewMockup() {
  return (
    <MockWindow
      title="Master Services Agreement — Key terms"
      label="Illustration of Node.law Contract Review: a table of key terms from a master services agreement with risk ratings, including an uncapped liability flagged as high risk."
    >
      <div className="p-5 @md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-serif text-xl text-navy-900">Key terms summary</p>
          <span className="text-[11px] text-muted">Reviewing as: Supplier</span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-paper text-[11px] tracking-wide text-muted uppercase">
              <tr>
                <th className="px-4 py-2.5 font-medium">Term</th>
                <th className="hidden px-4 py-2.5 font-medium @md:table-cell">Position</th>
                <th className="px-4 py-2.5 text-right font-medium">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {terms.map((row) => (
                <tr key={row.term}>
                  <td className="px-4 py-3 font-medium text-navy-900">
                    {row.term}
                    <span className="mt-0.5 block font-normal text-muted @md:hidden">{row.value}</span>
                  </td>
                  <td className="hidden px-4 py-3 text-ink @md:table-cell">{row.value}</td>
                  <td className="px-4 py-3 text-right">
                    <RiskPill level={row.level} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-lg border border-gold-500/30 bg-gold-50/60 p-4">
          <p className="text-[10px] font-semibold tracking-[0.14em] text-gold-700 uppercase">Suggested fallback · Cl. 14.2</p>
          <p className="mt-1.5 font-serif text-[13px] leading-relaxed text-ink">
            Cap data breach liability at 2× annual fees, in line with your playbook for enterprise customers.
          </p>
        </div>
      </div>
    </MockWindow>
  );
}
