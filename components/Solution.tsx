import { Upload, Sparkles, FileCheck2, Send } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    n: "01",
    title: "Upload the bank's questionnaire",
    body:
      "Drop the PDF or Excel you received from AIB, Bank of Ireland, Revolut, or any other client. We extract the 35–80 questions in seconds.",
  },
  {
    icon: Sparkles,
    n: "02",
    title: "Answer 30 guided questions, once",
    body:
      "Plain-English questions in 8 DORA domains. Answer once, reuse forever across every future bank client. Re-use existing ISO/SOC evidence.",
  },
  {
    icon: FileCheck2,
    n: "03",
    title: "Review draft with your auditor",
    body:
      "DoraPilot generates the response pack, Article 30 annexes, and required policies. Your auditor signs, you keep the final word.",
  },
  {
    icon: Send,
    n: "04",
    title: "Submit and reuse",
    body:
      "Export branded PDF, send to the bank, and track status. Next bank client? Reuse the same answers in 30 minutes, not 60 hours.",
  },
];

export function Solution() {
  return (
    <section id="how" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            How DoraPilot works
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            From bank email to submitted answer, in one afternoon.
          </h2>
          <p className="mt-4 text-foreground-muted">
            We don&apos;t pretend AI replaces your compliance officer. We do replace the 50 hours of
            copy-paste between PDF questionnaires, spreadsheets, and Word policies. Drafts in
            minutes, you and your auditor finalize.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="bg-background p-7">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="font-mono text-xs text-foreground-subtle">{s.n}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{s.body}</p>
              </div>
            );
          })}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-background shadow-sm">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-background-muted px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 font-mono text-xs text-foreground-subtle">
              app.dorapilot.com / assessments / aib-2026-q2
            </div>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-r border-border bg-background-muted p-5 text-sm">
              <div className="mb-4 text-[11px] font-medium uppercase tracking-wider text-foreground-subtle">
                Workspace
              </div>
              <div className="space-y-1">
                {[
                  ["📋", "Assessments", "3 active"],
                  ["📄", "Policies", "ICT RMF, BCP +4"],
                  ["🏦", "Bank clients", "AIB, BOI"],
                  ["✓", "Audit trail", "212 events"],
                ].map(([icon, name, sub]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-background"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs">{icon}</span>
                      <span className="font-medium">{name}</span>
                    </span>
                    <span className="text-[11px] text-foreground-subtle">{sub}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main area */}
            <div className="p-7">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-foreground-subtle">
                    AIB Bank — DORA assessment
                  </div>
                  <h4 className="mt-0.5 text-lg font-semibold">Q2 2026 vendor questionnaire</h4>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-medium text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Draft ready — 82% auto-filled
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { l: "Questions", v: "67 / 67" },
                  { l: "Auto-filled", v: "55" },
                  { l: "Time spent", v: "1h 47m" },
                ].map((kpi) => (
                  <div
                    key={kpi.l}
                    className="rounded-lg border border-border bg-background px-3 py-2.5"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-foreground-subtle">
                      {kpi.l}
                    </div>
                    <div className="font-mono text-xl font-semibold">{kpi.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                {[
                  ["Q.14", "Describe your incident classification process under DORA Art. 18", "Drafted"],
                  ["Q.27", "Provide your Register of Information vendor entries for AIB", "Needs review"],
                  ["Q.41", "Describe Exit Plan and data portability per Art. 28(8)", "Drafted"],
                  ["Q.52", "Confirm right of audit clauses (Art. 30(2))", "Drafted"],
                ].map(([id, q, status]) => (
                  <div
                    key={id}
                    className="flex items-start gap-3 rounded-md border border-border px-3 py-2.5 text-sm"
                  >
                    <span className="font-mono text-xs text-foreground-subtle">{id}</span>
                    <span className="flex-1 text-foreground">{q}</span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        status === "Drafted"
                          ? "bg-success-soft text-success"
                          : "bg-warning-soft text-warning"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
