import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Vanta alternative for DORA — DoraPilot vs Vanta (EU edition, 2026)",
  description:
    "Honest comparison of Vanta and DoraPilot for DORA compliance in the EU. Vanta excels at SOC 2 and 200+ integrations for US-first SaaS. DoraPilot is built only for DORA — Article 30, Register of Information in xBRL-CSV, EU residency.",
  alternates: { canonical: "/compare/vanta-dora-alternative" },
  keywords: [
    "vanta alternative",
    "vanta alternative europe",
    "vanta dora",
    "vanta vs dorapilot",
    "european compliance platform",
    "dora compliance for saas",
    "vanta eu pricing",
  ],
};

const rows: {
  feature: string;
  vanta: string | boolean;
  dorapilot: string | boolean;
  note?: string;
}[] = [
  {
    feature: "Primary market",
    vanta: "US-first, EU as secondary",
    dorapilot: "EU-only, DORA-specific",
  },
  {
    feature: "Starting price (annual)",
    vanta: "~$13,000–$25,000 (Core / Growth tiers)",
    dorapilot: "€0 free, paid from €49/mo",
  },
  {
    feature: "DORA Article 30 templates",
    vanta: "Generic ICT clauses, not EU-aligned",
    dorapilot: "EU 2022/2554 pre-aligned, signed-off",
  },
  {
    feature: "Register of Information (xBRL-CSV)",
    vanta: false,
    dorapilot: true,
    note: "Vanta has no xBRL-CSV generator. 94% of Excel RoI submissions were rejected by the EBA dry-run.",
  },
  {
    feature: "Arelle validation",
    vanta: false,
    dorapilot: true,
  },
  {
    feature: "Integrations (auto-evidence)",
    vanta: "200+ (AWS, GCP, Okta, GitHub, etc.)",
    dorapilot: "Coming Q4 2026 (DORA-relevant only)",
    note: "Vanta wins on breadth. DoraPilot will integrate only what DORA evidence actually needs.",
  },
  {
    feature: "EU data residency by default",
    vanta: "Configurable, US is default",
    dorapilot: "EU-only (Frankfurt + Dublin)",
  },
  {
    feature: "Best for SaaS team size",
    vanta: "20-200 employees",
    dorapilot: "1-50 employees",
  },
  {
    feature: "Onboarding time",
    vanta: "4-8 weeks (sales + implementation)",
    dorapilot: "Same day (self-serve)",
  },
  {
    feature: "Auditor co-sign workflow",
    vanta: true,
    dorapilot: true,
  },
  {
    feature: "Open public sub-processor list",
    vanta: true,
    dorapilot: true,
  },
  {
    feature: "Free tier",
    vanta: false,
    dorapilot: "10-question DORA gap check + PDF",
  },
  {
    feature: "Frameworks covered",
    vanta: "SOC 2, ISO 27001, GDPR, HIPAA, PCI, NIST CSF, DORA, ...",
    dorapilot: "DORA only (with ISO 27001 + SOC 2 + NIS2 + GDPR Art. 32 mappings)",
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
    "DORA-first compliance platform for EU ICT vendors and small financial entities — a Vanta alternative focused on DORA only.",
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
              Looking for a Vanta alternative for DORA in Europe?
            </h1>
            <p className="mt-4 text-lg text-foreground-muted">
              Vanta is the biggest compliance platform on the market, with
              over 8,000 customers. But it&apos;s US-first and prices for
              teams of 50+. For EU vendors hit by a DORA questionnaire from
              their bank, DoraPilot is built for exactly that single use
              case — at €49/mo instead of $13k/year.
            </p>
          </header>

          <Prose>
            <h2>The short version</h2>
            <p>
              <strong>Pick Vanta if</strong> you need a single platform for
              SOC 2 (your US sales team will ask), ISO 27001, GDPR, HIPAA,
              and DORA all at once; you have at least one compliance
              person; you have a $13k+ annual budget; you sell mostly to
              the US market.
            </p>
            <p>
              <strong>Pick DoraPilot if</strong> DORA is the urgent thing —
              a bank sent you a 70-question vendor questionnaire, or you
              need to submit a Register of Information in xBRL-CSV — and
              €13k for one form is the wrong order of magnitude. If later
              you also need SOC 2, you can add Vanta then; running both is
              common.
            </p>

            <blockquote>
              <p>
                DoraPilot doesn&apos;t try to replace Vanta. Vanta wins on
                integrations, ecosystem, and breadth of frameworks. DoraPilot
                wins on DORA depth, EU residency, and price.
              </p>
            </blockquote>

            <h2>Feature comparison</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Capability
                    </th>
                    <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      Vanta
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
                        <Cell value={row.vanta} />
                      </td>
                      <td className="py-3 align-top">
                        <Cell value={row.dorapilot} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Where Vanta still wins for EU teams</h2>
            <ul>
              <li>
                You also sell to the US and need SOC 2 Type II as your
                primary commercial deliverable.
              </li>
              <li>
                You want auto-evidence collection across AWS, Okta, Jira,
                GitHub, and 200 other tools.
              </li>
              <li>
                You have a $30k+ annual compliance budget and want one
                vendor for everything.
              </li>
              <li>
                Your auditor specifically works with Vanta&apos;s API.
              </li>
            </ul>

            <h2>Where DoraPilot wins</h2>
            <ul>
              <li>
                <strong>DORA is the only thing you need to ship in the
                next 30 days.</strong> No SOC 2 today, no ISO. Just
                respond to the bank.
              </li>
              <li>
                <strong>Your Register of Information is due</strong> and
                you have no way to produce xBRL-CSV.
              </li>
              <li>
                <strong>EU residency is a hard contractual requirement</strong>{" "}
                from your bank customer, with no US fallback allowed.
              </li>
              <li>
                <strong>Budget reality:</strong> you&apos;re a 5-30 person
                SaaS and €13k/year for one form is unjustifiable.
              </li>
              <li>
                <strong>Speed:</strong> you can self-serve, draft, and
                submit the same week.
              </li>
            </ul>

            <h2>Running both is fine</h2>
            <p>
              Plenty of EU SaaS teams use Vanta for SOC 2 and DoraPilot
              for DORA. The two don&apos;t conflict — different evidence,
              different artefacts, different audiences. The DoraPilot
              approach is to be the specialist tool that lives next to your
              generalist compliance platform, not to replace it.
            </p>

            <h2>The bottom line</h2>
            <p>
              Vanta is excellent if you can justify its price and need its
              breadth. For the long tail of EU SaaS teams that need DORA
              specifically and nothing else, DoraPilot delivers the exact
              artefacts the bank&apos;s third-party risk team wants —
              Article 30 contract annex, Register of Information entries,
              policy pack — without the sales cycle and without the price
              tag.
            </p>
          </Prose>

          <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border bg-background-muted p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Try the free DORA gap check
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                10 questions, 5 minutes. PDF report with concrete next steps.
                No credit card.
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
