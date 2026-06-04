import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Drata vs DoraPilot — DORA-specific alternative (EU, 2026)",
  description:
    "Honest comparison of Drata and DoraPilot for DORA compliance. Drata excels at automated evidence for SOC 2 and ISO 27001. DoraPilot focuses only on DORA — Article 30 contracts, Register of Information in xBRL-CSV, EU residency.",
  alternates: { canonical: "/compare/drata-vs-dorapilot" },
  keywords: [
    "drata alternative",
    "drata vs dorapilot",
    "drata dora",
    "drata europe",
    "dora compliance saas",
    "drata pricing eu",
  ],
};

const rows: {
  feature: string;
  drata: string | boolean;
  dorapilot: string | boolean;
  note?: string;
}[] = [
  {
    feature: "Primary focus",
    drata: "SOC 2, ISO 27001, automated evidence",
    dorapilot: "DORA only — Article 30 + RoI + policies",
  },
  {
    feature: "Starting price",
    drata: "~$10,000–$15,000 / year",
    dorapilot: "€0 free, paid from €49/mo",
  },
  {
    feature: "Auto-evidence collection",
    drata: "85+ integrations, very mature",
    dorapilot: "Limited to DORA-relevant evidence (Q4 2026)",
    note: "Drata is best-in-class at continuous evidence collection. DoraPilot will scope to what DORA artefacts actually require.",
  },
  {
    feature: "DORA Article 30 contract templates",
    drata: "Generic, US-first",
    dorapilot: "EU 2022/2554-aligned",
  },
  {
    feature: "Register of Information (xBRL-CSV)",
    drata: false,
    dorapilot: true,
  },
  {
    feature: "EBA taxonomy 4.0 support",
    drata: false,
    dorapilot: true,
  },
  {
    feature: "EU data residency by default",
    drata: "US default, EU on request",
    dorapilot: "EU-only (Frankfurt + Dublin)",
  },
  {
    feature: "Trust Center pages",
    drata: true,
    dorapilot: true,
    note: "Both auto-publish a trust page with security posture, certifications, sub-processors.",
  },
  {
    feature: "Continuous monitoring",
    drata: "Strong — flags evidence drift daily",
    dorapilot: "Coming Q1 2027",
  },
  {
    feature: "Onboarding time",
    drata: "4-6 weeks",
    dorapilot: "Same day (self-serve)",
  },
  {
    feature: "Free tier",
    drata: false,
    dorapilot: "10-question DORA gap check",
  },
  {
    feature: "Best fit",
    drata: "Series-A+ SaaS pursuing SOC 2 + ISO 27001",
    dorapilot: "EU SaaS facing DORA questionnaire from a bank",
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

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "DoraPilot",
  description:
    "DORA-first compliance platform — a Drata alternative for EU ICT vendors needing Article 30 contracts and xBRL-CSV Register of Information.",
  brand: { "@type": "Organization", name: "DoraPilot" },
  offers: [
    { "@type": "Offer", name: "Free Assessment", price: "0", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Starter", price: "49", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Pro", price: "99", priceCurrency: "EUR" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-14">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Comparison
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Drata vs DoraPilot for DORA compliance
            </h1>
            <p className="mt-4 text-lg text-foreground-muted">
              Drata is a strong choice for teams pursuing SOC 2 or ISO 27001
              with automated evidence collection. For EU teams facing a DORA
              vendor questionnaire from a bank, DoraPilot is the specialist
              alternative — built only for DORA at 1/15th of Drata&apos;s
              entry price.
            </p>
          </header>

          <Prose>
            <h2>The short answer</h2>
            <p>
              <strong>Pick Drata if</strong> you&apos;re going for SOC 2 or
              ISO 27001 as your primary deliverable, you have a $10k+
              annual compliance budget, you want best-in-class automated
              evidence collection from 85+ integrations, and your auditor
              uses Drata.
            </p>
            <p>
              <strong>Pick DoraPilot if</strong> the immediate problem is
              DORA — a bank&apos;s vendor questionnaire, an Article 30
              contract addendum, or a Register of Information submission —
              and you want a tool that&apos;s purpose-built for that single
              regulation, at a price small SaaS teams can actually
              justify.
            </p>

            <h2>Feature comparison</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Capability
                    </th>
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Drata
                    </th>
                    <th className="py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      DoraPilot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
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
                        <Cell value={row.drata} />
                      </td>
                      <td className="py-3 align-top">
                        <Cell value={row.dorapilot} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Where Drata is the better choice</h2>
            <ul>
              <li>
                You&apos;re going through your first SOC 2 audit and want
                continuous evidence rather than once-a-year scrambling.
              </li>
              <li>
                You want a single dashboard showing the state of every
                control across multiple frameworks.
              </li>
              <li>
                You have integrations across AWS, Okta, GitHub and
                Drata-supported tooling.
              </li>
              <li>
                Your customers ask "show us your Trust Center" and you
                want a polished public page.
              </li>
            </ul>

            <h2>Where DoraPilot wins</h2>
            <ul>
              <li>
                <strong>You don&apos;t need SOC 2 yet.</strong> EU banks
                care about DORA. SOC 2 is a US procurement signal.
              </li>
              <li>
                <strong>You need Register of Information.</strong> Drata
                doesn&apos;t generate xBRL-CSV; DoraPilot does.
              </li>
              <li>
                <strong>You want pricing that fits a pre-revenue SaaS.</strong>{" "}
                €49/mo vs $10k/year.
              </li>
              <li>
                <strong>You&apos;re EU-only.</strong> DoraPilot is built
                on EU infrastructure with EU sub-processors by default,
                no configuration needed.
              </li>
              <li>
                <strong>You need to ship this month.</strong> Drata is
                weeks of onboarding before you produce a single artefact.
              </li>
            </ul>

            <h2>Can they coexist?</h2>
            <p>
              Yes. Many EU SaaS teams will eventually need both — Drata
              for SOC 2 to sell US enterprise, DoraPilot for DORA to keep
              their EU bank customers. The two are complementary, not
              competitive.
            </p>

            <h2>The bottom line</h2>
            <p>
              Drata is a category leader for automated continuous
              compliance against generic frameworks. DoraPilot is a
              category-of-one tool for the specific problem of DORA in the
              EU. If DORA is your immediate fire, DoraPilot puts it out
              faster and cheaper. If you&apos;re building a long-term
              multi-framework compliance program, Drata is still a strong
              foundation.
            </p>
          </Prose>

          <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border bg-background-muted p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Try the free DORA gap check
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                10 questions, 5 minutes. PDF report. No credit card.
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

          <RelatedLinks exclude={["/compare/drata-vs-dorapilot"]} />
        </article>
      </main>
      <Footer />
    </>
  );
}
