import { AlertTriangle } from "lucide-react";

const STATS = [
  {
    big: "22,000+",
    label: "EU financial entities under DORA",
    detail: "Each one auditing 10–30 ICT vendors.",
    source: "PwC UK, 2025",
  },
  {
    big: "94%",
    label: "of Excel RoI submissions rejected",
    detail: "European supervisors' dry-run, 2024–25.",
    source: "EBA dry-run report",
  },
  {
    big: "50%",
    label: "of entities still not fully compliant",
    detail: "Even with the regulation live since Jan 2025.",
    source: "Deloitte DORA Survey Wave 3",
  },
  {
    big: "€8k–€15k",
    label: "typical boutique auditor quote",
    detail: "Per response. Per bank client. Per year.",
    source: "Quoted in Dublin & Berlin, 2026",
  },
];

export function Problem() {
  return (
    <section className="border-b border-border bg-background-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning-soft px-3 py-1 text-xs font-medium text-warning">
            <AlertTriangle className="h-3 w-3" />
            The DORA reality, by the numbers
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            Compliance vendors charge €10k+/year. <br />
            The regulator&apos;s tools were not built for you.
          </h2>
          <p className="mt-4 text-foreground-muted">
            DORA went live on 17 January 2025 and applies to all financial entities and their
            ICT third-party providers across the EU. The big platforms (Vanta, Drata, Sprinto)
            start at €7,500/year and sell to series-B startups upward. Below that line, most
            teams answer questionnaires in spreadsheets — and watch the bank reject them.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="font-mono text-4xl font-semibold tracking-tight text-foreground">
                {s.big}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
              <div className="mt-1 text-sm text-foreground-muted">{s.detail}</div>
              <div className="mt-3 border-t border-border pt-2 text-[11px] uppercase tracking-wider text-foreground-subtle">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
