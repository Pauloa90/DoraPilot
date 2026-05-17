import {
  FileText,
  Database,
  ShieldCheck,
  Network,
  Lock,
  Globe,
} from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "Article 28 & 30 contract templates",
    body:
      "Pre-drafted contract annexes for SaaS, infra, and consulting agreements. Right-of-audit, exit strategy, sub-outsourcing chain — already aligned with EU 2022/2554.",
  },
  {
    icon: Database,
    title: "Register of Information (xBRL-CSV)",
    body:
      "Generate valid RoI files in EBA taxonomy 4.0 format. Validated with Arelle, the EBA-certified XBRL processor. No more rejected Excel submissions.",
  },
  {
    icon: ShieldCheck,
    title: "ICT Risk & BCP policies",
    body:
      "Article 6 risk management framework, Article 11 business continuity, Article 17 incident response — generated and versioned per client. Markdown-source, PDF-output.",
  },
  {
    icon: Network,
    title: "Multi-framework mapping",
    body:
      "Built-in DORA ↔ ISO 27001 ↔ SOC 2 ↔ NIS2 ↔ GDPR Art. 32 mapping. Answer once, reuse evidence across 5 frameworks. Save what would be weeks of duplicate work.",
  },
  {
    icon: Lock,
    title: "Immutable audit trail",
    body:
      "Every answer, every edit, every export is hashed and logged. SHA-256 chained records prove to your bank's auditor that nothing was tampered with after submission.",
  },
  {
    icon: Globe,
    title: "EU data residency, by design",
    body:
      "Hosted on EU-only infrastructure (Frankfurt + Dublin). Sub-processor list public. GDPR Article 28 DPA available before signup. No transfers outside the EEA.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border bg-background-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            What you get
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Built for the boring parts of DORA, so you don&apos;t have to.
          </h2>
          <p className="mt-4 text-foreground-muted">
            Each module maps to a specific DORA article. Nothing invented, nothing &quot;AI
            magic.&quot; Just the artefacts your bank&apos;s third-party risk team will
            actually ask for.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-background p-6 transition hover:border-border-strong"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
