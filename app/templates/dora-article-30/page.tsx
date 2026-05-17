import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { Download, FileText, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "DORA Article 30 contract template (free, Markdown) — DoraPilot",
  description:
    "Free DORA Article 30 contract addendum template, aligned with Regulation (EU) 2022/2554. Covers all 30(2) mandatory clauses plus 30(3) clauses for critical/important functions. CC BY 4.0 — download, adapt, sign with your counsel.",
  alternates: { canonical: "/templates/dora-article-30" },
  keywords: [
    "dora article 30 template",
    "dora article 30 contract",
    "dora contract addendum",
    "article 30 free template",
    "dora ict contract template",
    "dora compliance contract",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "DORA Article 30 contract addendum template",
  description:
    "Free template for the contract clauses required by Article 30 of Regulation (EU) 2022/2554 (DORA), covering both Tier 1 (all ICT contracts) and Tier 2 (critical or important functions) requirements.",
  author: { "@type": "Organization", name: "DoraPilot" },
  publisher: { "@type": "Organization", name: "DoraPilot" },
  inLanguage: "en",
  license: "https://creativecommons.org/licenses/by/4.0/",
  url: "https://dorapilot.com/templates/dora-article-30",
  encodingFormat: "text/markdown",
};

const tier1 = [
  "Service description and locations (Art. 30(2)(a))",
  "Data protection / DPA reference (Art. 30(2)(b))",
  "Service levels with measurable targets (Art. 30(2)(c))",
  "Incident assistance at no extra cost (Art. 30(2)(d))",
  "Cooperation with competent authorities (Art. 30(2)(e))",
  "Termination triggers (Art. 30(2)(f))",
  "Exit and transition cooperation (Art. 30(2)(g))",
];

const tier2 = [
  "Detailed scope and substitutability (Art. 30(3)(a))",
  "Sub-outsourcing notice and right to object (Art. 30(3)(b))",
  "Quarterly performance reporting (Art. 30(3)(c))",
  "Right of audit including on-site (Art. 30(3)(e))",
  "TLPT participation rules (Art. 30(3)(f))",
  "Documented exit strategy (Art. 30(3)(g))",
];

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-14">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Free template
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              DORA Article 30 contract addendum template
            </h1>
            <p className="mt-4 text-lg text-foreground-muted">
              The contract clauses every ICT vendor selling to an EU
              financial entity will eventually need. Aligned with Article
              30(2) and 30(3) of Regulation (EU) 2022/2554. Free, in
              Markdown. CC BY 4.0 — adapt freely with attribution.
            </p>
          </header>

          {/* Download CTA */}
          <div className="mb-10 flex flex-col gap-4 rounded-xl border border-accent bg-accent-soft p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  dora-article-30-contract-template.md
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  ~6,500 words · 13 numbered sections · ready to fill in
                </p>
              </div>
            </div>
            <a
              href="/templates/dora-article-30-contract-template.md"
              download
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download (free, no signup)
            </a>
          </div>

          <Prose>
            <h2>What&apos;s inside</h2>
            <p>
              The template covers the full scope of Article 30, divided
              into the two tiers DORA defines:
            </p>

            <h3>Tier 1 — applies to every ICT contract (Art. 30(2))</h3>
            <ul className="not-prose space-y-1.5">
              {tier1.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3>
              Tier 2 — additional, for critical or important functions (Art.
              30(3))
            </h3>
            <ul className="not-prose space-y-1.5">
              {tier2.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2>How to use it</h2>
            <ol>
              <li>
                Download the Markdown file. Open it in your editor (VS
                Code, Obsidian) or paste into Word — it renders cleanly
                anywhere.
              </li>
              <li>
                Replace every bracketed <code>[ITEM]</code> with values
                specific to your service. The bracketed items are also
                where you&apos;ll need to coordinate with your customer.
              </li>
              <li>
                Confirm with the customer whether the Services are
                classified as supporting a Critical or Important
                Function. If yes, keep sections 9-13. If no, delete them.
              </li>
              <li>
                Read the <strong>"Template notes"</strong> section at the
                bottom — it flags the items that are commercially
                negotiable (audit cadence, SLA tightness, notice
                periods).
              </li>
              <li>
                Have your counsel review before signing. <strong>This
                template is not legal advice.</strong>
              </li>
            </ol>

            <h2>Common questions</h2>

            <h3>Is this the only template I need?</h3>
            <p>
              For the Article 30 contract clauses, yes. You may also need
              separately:
            </p>
            <ul>
              <li>
                A <strong>Data Processing Agreement</strong> (GDPR Art.
                28) — referenced from this template. See our{" "}
                <Link href="/legal/dpa">DPA model</Link>.
              </li>
              <li>
                An <strong>Information Security Annex</strong> describing
                your controls (typically your SOC 2 Type II report under
                NDA, or a plain-English summary).
              </li>
              <li>
                Updated <strong>Sub-processor list</strong> — see our{" "}
                <Link href="/legal/subprocessors">sub-processors page</Link>{" "}
                as an example structure.
              </li>
            </ul>

            <h3>Can I sign this directly?</h3>
            <p>
              You can use this template as the basis for what you sign,
              but every bracketed value needs to be filled in and the
              text reviewed by counsel for your specific situation. Don&apos;t
              just rename it and sign.
            </p>

            <h3>What if the bank sends their own template?</h3>
            <p>
              Read it against this one. If their template covers the
              same Article 30 ground, the substance is fine. If their
              version omits exit cooperation, sub-processor notice, or
              audit limits, those are the items to push back on. Our{" "}
              <Link href="/blog/article-30">Article 30 cheat sheet</Link>{" "}
              walks through where you can legitimately negotiate.
            </p>

            <h3>What does the licence say?</h3>
            <p>
              CC BY 4.0. You can copy, adapt, redistribute, and use
              commercially. The only requirement is attribution — keep
              the "Prepared by DoraPilot" note in the footer, or replace
              it with your own attribution.
            </p>

            <h2>Why we&apos;re giving this away</h2>
            <p>
              The hours we save you with this template are not the
              product. The product is the audit trail, the questionnaire
              engine, the Register of Information generator. A template
              is a starting point — for the work that takes weeks (your
              full DORA response across multiple bank clients), you&apos;ll
              eventually need the platform.
            </p>
            <p>
              If you want to be told when other DORA artefacts become
              available — exit plan template, RoI xBRL-CSV exporter,
              policy pack — join the early access list below.
            </p>
          </Prose>

          <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border bg-background-muted p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Get notified when the next template ships
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                One email per new artefact. No marketing.
              </p>
            </div>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-white hover:bg-foreground/90"
            >
              Join the list
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
