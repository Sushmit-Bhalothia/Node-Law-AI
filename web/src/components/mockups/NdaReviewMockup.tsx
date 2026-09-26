/* Illustration of the NDA Review tool: a document with highlighted risky
   clauses and a side panel with a suggested redline. All text is sample text. */

import { MockWindow, RiskPill } from "./MockWindow";

export function NdaReviewMockup() {
  return (
    <MockWindow
      title="Mutual NDA — Meridian Holdings × Client.docx"
      label="Illustration of Node.law NDA Review: a non-disclosure agreement with risky clauses highlighted in red and amber, and a panel suggesting a redline that reduces a 36-month non-solicitation period to 12 months."
    >
      <div className="grid @xl:grid-cols-[1.35fr_1fr]">
        {/* Document */}
        <div className="border-b border-line px-5 py-6 font-serif text-[13px] leading-[1.75] text-ink @md:px-8 @xl:border-r @xl:border-b-0">
          <p className="text-center text-[11px] font-sans font-semibold tracking-[0.18em] text-navy-900 uppercase">
            Mutual Non-Disclosure Agreement
          </p>

          <p className="mt-5">
            <span className="font-sans text-[11px] font-semibold text-muted">1.</span>{" "}
            <span className="font-semibold text-navy-900">Confidential Information</span> means{" "}
            <mark className="rounded-sm bg-risk-med-bg px-0.5 text-ink underline decoration-risk-med decoration-2 underline-offset-[3px]">
              all information of any nature, whether or not marked as confidential
            </mark>
            , disclosed by either party.
          </p>

          <p className="mt-3">
            <span className="font-sans text-[11px] font-semibold text-muted">4.</span>{" "}
            <span className="font-semibold text-navy-900">Term.</span> The obligations in this Agreement shall survive
            for a period of five (5) years from the date of disclosure.
          </p>

          <p className="mt-3 rounded-md bg-risk-high-bg/70 p-2 ring-1 ring-risk-high/25">
            <span className="font-sans text-[11px] font-semibold text-muted">7.</span>{" "}
            <span className="font-semibold text-navy-900">Non-Solicitation.</span> Neither party shall solicit any
            employee of the other party for a period of{" "}
            <mark className="rounded-sm bg-transparent text-ink underline decoration-risk-high decoration-2 underline-offset-[3px]">
              thirty-six (36) months
            </mark>{" "}
            following termination.
          </p>

          <p className="mt-3">
            <span className="font-sans text-[11px] font-semibold text-muted">9.</span>{" "}
            <span className="font-semibold text-navy-900">Governing Law.</span> This Agreement is governed by the laws
            of the{" "}
            <mark className="rounded-sm bg-risk-low-bg px-0.5 text-ink underline decoration-risk-low decoration-2 underline-offset-[3px]">
              Dubai International Financial Centre
            </mark>
            .
          </p>

          <p className="mt-3">
            <span className="font-sans text-[11px] font-semibold text-muted">11.</span>{" "}
            <span className="font-semibold text-navy-900">Remedies.</span>{" "}
            <mark className="rounded-sm bg-risk-high-bg px-0.5 text-ink underline decoration-risk-high decoration-2 underline-offset-[3px]">
              The Recipient shall indemnify the Discloser for all losses
            </mark>{" "}
            arising from any breach.
          </p>

          <div className="mt-4 space-y-2" >
            <div className="h-2 w-full rounded bg-navy-900/[0.06]" />
            <div className="h-2 w-11/12 rounded bg-navy-900/[0.06]" />
            <div className="h-2 w-4/6 rounded bg-navy-900/[0.06]" />
          </div>
        </div>

        {/* Review panel */}
        <div className="bg-paper/60 p-5 font-sans @md:p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.14em] text-navy-900 uppercase">Review summary</p>
            <span className="text-[11px] text-muted">vs. Standard NDA playbook</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { n: 2, label: "High", cls: "text-risk-high" },
              { n: 1, label: "Medium", cls: "text-risk-med" },
              { n: 8, label: "Standard", cls: "text-risk-low" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-line bg-white py-2">
                <p className={`font-serif text-2xl leading-none ${s.cls}`}>{s.n}</p>
                <p className="mt-1 text-[11px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-risk-high/25 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-semibold text-navy-900">Cl. 7 — Non-solicitation</p>
              <RiskPill level="high" />
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-muted">
              36 months exceeds your standard position of 12 months and applies to all employees, not only those
              involved in the engagement.
            </p>
            <div className="mt-3 rounded-md border border-line bg-paper p-2.5 font-serif text-[12px] leading-relaxed">
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-gold-700 uppercase">
                Suggested redline
              </p>
              <p className="mt-1 text-ink">
                …for a period of <del className="text-risk-high decoration-risk-high">thirty-six (36)</del>{" "}
                <ins className="text-risk-low no-underline decoration-risk-low underline decoration-1">twelve (12)</ins>{" "}
                months…
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-navy-900 px-2.5 py-1 text-[11px] font-medium text-white">Accept</span>
              <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-navy-900">
                Edit
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3">
            <p className="text-[13px] text-navy-900">Cl. 11 — Uncapped indemnity</p>
            <RiskPill level="high" />
          </div>
          <div className="mt-2 flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3">
            <p className="text-[13px] text-navy-900">Cl. 1 — Broad definition</p>
            <RiskPill level="medium" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}
