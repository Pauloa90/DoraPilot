"use client";

import { Plus } from "lucide-react";

const QA = [
  {
    q: "What is DORA, in one paragraph?",
    a: "The Digital Operational Resilience Act (Regulation (EU) 2022/2554) is in force since 17 January 2025. It requires EU banks, insurers, fund managers and fintechs to prove they can withstand operational disruptions — and to extend that scrutiny to every ICT vendor they depend on. If you sell software, infrastructure, or analytics to a financial entity in the EU, DORA touches you through their contracts and questionnaires.",
  },
  {
    q: "Who actually needs DoraPilot?",
    a: "Two personas. (1) ICT vendors — SaaS, dev shops, infra providers with 5–50 employees — who keep getting DORA questionnaires from bank clients and have no compliance team. (2) Small financial entities — credit unions, EMIs, payment institutions, smaller fintechs — who must submit a Register of Information annually but lack the compliance budget of a tier-1 bank.",
  },
  {
    q: "Is the output legally binding or auditor-approved?",
    a: "No, and we say it clearly. DoraPilot generates drafts. Your compliance officer or qualified auditor must review and sign. We provide the workflow (audit trail, co-sign, version history) and the technical artefacts (xBRL-CSV, PDF), not the legal opinion. We are a tool, not a law firm — exactly as Sprinto, Vanta and Drata also disclaim.",
  },
  {
    q: "What is xBRL-CSV and why does it matter?",
    a: "It's the structured machine-readable format the European Banking Authority requires for the Register of Information. Plain Excel doesn't fly — in the EBA dry-run, 94% of Excel-based submissions were rejected on technical grounds. DoraPilot converts your vendor data into a valid xBRL-CSV package (taxonomy 4.0), validated with the same engine the regulator uses (Arelle).",
  },
  {
    q: "Can my own auditor co-sign through the platform?",
    a: "Yes. Pro and Partner plans include an auditor invite flow. They get read-only access to evidence, can request clarifications inline, and apply an electronic signature to the final pack. The audit trail records every action with timestamp and hash. The bank's third-party risk team sees one document, one chain of custody.",
  },
  {
    q: "Where is my data hosted?",
    a: "Frankfurt (primary) and Dublin (warm replica), both inside the EU. Sub-processors: Supabase EU, Vercel EU, Anthropic Claude (EU endpoints under DPA). Full sub-processor list at /legal/subprocessors before you sign up. No data leaves the EEA.",
  },
  {
    q: "What if the bank rejects our response?",
    a: "We track rejections per client in your dashboard. The audit trail shows the exact version submitted, the bank's feedback verbatim, and the changes between drafts — so the second submission moves faster. If a particular bank's template isn't in our library yet, we add it within 5 business days.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard, no email required, no win-back call. You keep export access for 30 days after cancellation. We don't do auto-renewal traps and we don't apply double-digit annual price hikes (looking at you, big incumbents).",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border bg-background-muted py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            The questions you&apos;d actually ask.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-background">
          {QA.map((item, idx) => (
            <details
              key={idx}
              className="group px-5 py-4 [&_summary]:list-none open:bg-background-muted/30"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-1 text-left text-base font-medium text-foreground">
                <span>{item.q}</span>
                <Plus className="chevron h-4 w-4 shrink-0 text-foreground-muted transition-transform" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-muted">
          Other questions?{" "}
          <a href="mailto:hello@dorapilot.eu" className="text-accent hover:underline">
            hello@dorapilot.eu
          </a>{" "}
          — typical reply within 12 hours, by a human.
        </p>
      </div>
    </section>
  );
}
