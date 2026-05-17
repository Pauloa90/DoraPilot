import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Sprinto vs DoraPilot — DORA-first alternative for ICT vendors (2026)",
  description:
    "Honest comparison of Sprinto and DoraPilot for DORA compliance. Sprinto covers SOC 2, ISO 27001, GDPR, and DORA generically. DoraPilot is built only for DORA — Article 30, Register of Information, EU vendor questionnaires.",
  alternates: { canonical: "/compare/sprinto-vs-dorapilot" },
  keywords: [
    "sprinto alternative",
    "sprinto vs dorapilot",
    "dora compliance software",
    "sprinto dora",
    "european compliance platform",
    "saas dora compliance",
  ],
};

const comparisonRows: {
  feature: string;
  sprinto: string | boolean;
  dorapilot: string | boolean;
  note?: string;
}[] = [
  {
    feature: "Primary focus",
    sprinto: "20+ frameworks (SOC 2, ISO 27001, GDPR, HIPAA, DORA, ...)",
    dorapilot: "DORA only",
  },
  {
    feature: "Starting price",
    sprinto: "~€7,500 / year",
    dorapilot: "€0 free, paid from €49/mo",
  },
  {
    feature: "DORA Article 30 contract templates",
    sprinto: "Generic templates, US-leaning",
    dorapilot: "EU 2022/2554 pre-aligned",
  },
  {
    feature: "Register of Information (xBRL-CSV)",
    sprinto: false,
    dorapilot: true,
    note: "94% of Excel RoI submissions were rejected — Sprinto doesn't generate xBRL-CSV.",
  },
  {
    feature: "Arelle validation built-in",
    sprinto: false,
    dorapilot: true,
  },
  {
    feature: "EU-only data residency",
    sprinto: "US + EU options",
    dorapilot: "EU only (Frankfurt + Dublin)",
  },
  {
    feature: "Built for solo CTOs / small SaaS",
    sprinto: false,
    dorapilot: true,
    note: "Sprinto starts at series-B+ priced tiers.",
  },
  {
    feature: "ISO 27001 / SOC 2 mapping",
    sprinto: true,
    dorapilot: "DORA ↔ ISO 27001 ↔ SOC 2 ↔ NIS2 ↔ GDPR Art. 32",
  },
  {
    feature: "Auditor co-sign workflow",
    sprinto: true,
    dorapilot: true,
  },
  {
    feature: "Immutable audit trail",
    sprinto: true,
    dorapilot: "SHA-256 chained",
  },
  {
    feature: "Open sub-processor list",
    sprinto: true,
    dorapilot: true,
  },
  {
    feature: "Free tier",
    sprinto: false,
    dorapilot: "10-question gap analysis + PDF",
  },
  {
    feature: "Setup time to first response",
    sprinto: "2-4 weeks (sales cycle + onboarding)",
    dorapilot: "Same day (self-serve)",
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 text-success">
        <Check className="h-4 w-4" /> Yes
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center gap-1.5 text-foreground-subtle">
        <X className="h-4 w-4" /> No
      </span>
    );
  return <span>{value}</span>;
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "DoraPilot",
  description:
    "DORA-first compliance platform for EU ICT vendors and small financial entities. Generates Article 30 contracts, Register of Information files in xBRL-CSV, and ICT risk policies.",
  brand: { "@type": "Organization", name: "DoraPilot" },
  offers: [
    {
      "@type": "Offer",
      name: "Free Assessment",
      price: "0",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "49",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "99",
      priceCurrency: "EUR",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-14">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Comparison
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Sprinto vs DoraPilot — which one for DORA?
            </h1>
            <p className="mt-4 text-lg text-foreground-muted">
              Sprinto is an excellent generalist compliance platform. DoraPilot
              is a DORA specialist. Below is an honest comparison — when
              Sprinto is the right choice, and when DoraPilot is.
            </p>
          </header>

          <Prose>
            <h2>The short answer</h2>
            <p>
              <strong>Pick Sprinto if</strong> you need a single platform for
              SOC 2, ISO 27001, GDPR, HIPAA, <em>and</em> DORA, you have a
              series-B+ budget, and you already have at least one full-time
              compliance person.
            </p>
            <p>
              <strong>Pick DoraPilot if</strong> DORA is the main thing you
              need — because a bank sent you a 70-question vendor
              questionnaire, or because you have to submit a Register of
              Information by April — and you don't want to commit €7,500/year
              just to answer one form.
            </p>

            <blockquote>
              <p>
                We&apos;re not pretending DoraPilot is "better" than Sprinto
                across the board. Sprinto wins on breadth and integrations.
                DoraPilot wins on DORA-specific depth and price.
              </p>
            </blockquote>

            <h2>Feature-by-feature</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Capability
                    </th>
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Sprinto
                    </th>
                    <th className="py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      DoraPilot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border">
                      <td className="py-3 pr-4 align-top font-medium">
                        {row.feature}
                        {row.note && (
                          <div className="mt-1 text-xs font-normal text-foreground-subtle">
                            {row.note}
                          </div>
                        )}
                      </td>
                      <td className="py-3 pr-4 align-top">
                        <Cell value={row.sprinto} />
                      </td>
                      <td className="py-3 align-top">
                        <Cell value={row.dorapilot} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Where Sprinto is the better choice</h2>
            <ul>
              <li>
                You manage 3+ frameworks simultaneously and want a single
                control library.
              </li>
              <li>
                You have a security team that wants automated evidence
                collection across AWS, GCP, Okta, Jira and 100+ other
                integrations.
              </li>
              <li>
                You ship to US customers and need SOC 2 Type II as the
                primary deliverable.
              </li>
              <li>
                Your auditor explicitly works with Sprinto and you want
                friction-free handoff.
              </li>
            </ul>

            <h2>Where DoraPilot is the better choice</h2>
            <ul>
              <li>
                A bank sent you a DORA vendor questionnaire and you have 2
                weeks to answer 70 questions.
              </li>
              <li>
                You need to produce a valid Register of Information in
                xBRL-CSV for the next EBA submission window.
              </li>
              <li>
                You're a 5-50 person SaaS and €7,500/year is the wrong order
                of magnitude.
              </li>
              <li>
                You sell mainly to EU financial entities and want
                EU-data-residency by design with no special configuration.
              </li>
              <li>
                You want to validate before paying — DoraPilot has a real
                free tier with a 10-question gap analysis.
              </li>
            </ul>

            <h2>What both have in common</h2>
            <ul>
              <li>Auditor co-sign workflows</li>
              <li>Immutable audit trail</li>
              <li>Public sub-processor list</li>
              <li>EU data hosting available</li>
              <li>
                Cancellation without retention games (DoraPilot writes this
                explicitly into{" "}
                <a href="/legal/terms">Terms of Service</a>)
              </li>
            </ul>

            <h2>The bottom line</h2>
            <p>
              For most EU SaaS founders who get hit with a DORA questionnaire
              and don&apos;t have a compliance officer, DoraPilot delivers
              the specific artefacts the bank&apos;s third-party risk team
              wants — Article 30 annexes, Register of Information entries,
              policy pack — at roughly 1/15th of Sprinto&apos;s entry price.
            </p>
            <p>
              For larger teams managing a portfolio of frameworks, Sprinto
              remains a strong, well-supported choice. Many DoraPilot
              customers run both: Sprinto for SOC 2, DoraPilot for DORA.
            </p>
          </Prose>

          <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border bg-background-muted p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Try DoraPilot&apos;s free 10-question gap check
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                See where you stand on DORA in 5 minutes. No credit card.
              </p>
            </div>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-white hover:bg-foreground/90"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
