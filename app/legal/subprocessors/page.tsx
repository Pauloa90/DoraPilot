import { Prose } from "@/components/Prose";

export const metadata = {
  title: "Sub-processors — DoraPilot",
  description:
    "Current and planned sub-processors used by DoraPilot to deliver the service. EU data residency, change notification, and DPA links.",
};

const LAST_UPDATED = "2026-05-17";

type Status = "current" | "planned";

type Subprocessor = {
  name: string;
  status: Status;
  function: string;
  dataCategories: string;
  location: string;
  certifications: string;
  dpa: string;
};

const SUBPROCESSORS: Subprocessor[] = [
  {
    name: "Vercel Inc.",
    status: "current",
    function: "Hosting of the marketing site and Next.js application edge runtime.",
    dataCategories:
      "Visitor request metadata (IP, user agent), no DORA assessment content stored.",
    location: "EU — Frankfurt (fra1) region; failover to Dublin (dub1).",
    certifications: "SOC 2 Type II, ISO 27001, ISO 27018.",
    dpa: "https://vercel.com/legal/dpa",
  },
  {
    name: "Supabase Inc.",
    status: "planned",
    function:
      "Primary database, authentication and storage for the DoraPilot application.",
    dataCategories:
      "Account data, assessment content, vendor records, audit trail.",
    location: "EU — Frankfurt region (eu-central-1).",
    certifications: "SOC 2 Type II, HIPAA-ready.",
    dpa: "https://supabase.com/legal/dpa",
  },
  {
    name: "Anthropic Ireland Ltd.",
    status: "planned",
    function:
      "Large language model (Claude) for drafting questionnaire responses and policy text.",
    dataCategories:
      "Prompt content sent for inference (assessment questions and existing evidence summaries). No persistent storage at Anthropic.",
    location:
      "EU endpoints — content processed within the EU. Zero-retention enterprise configuration.",
    certifications: "SOC 2 Type II.",
    dpa: "https://www.anthropic.com/legal/dpa",
  },
  {
    name: "Resend Inc.",
    status: "planned",
    function:
      "Transactional email delivery (sign-in links, notifications, waitlist confirmations).",
    dataCategories: "Recipient email address, email content metadata.",
    location: "EU region.",
    certifications: "SOC 2 Type II.",
    dpa: "https://resend.com/legal/dpa",
  },
  {
    name: "Plausible Insights OÜ",
    status: "planned",
    function:
      "Privacy-friendly product analytics — page views, conversion events. No cookies, no personal identifiers.",
    dataCategories: "Aggregated event metadata only.",
    location: "EU — Germany.",
    certifications: "GDPR-aligned by design (no personal data collected).",
    dpa: "https://plausible.io/dpa",
  },
  {
    name: "Sentry / Functional Software, Inc.",
    status: "planned",
    function: "Application error monitoring and performance tracing.",
    dataCategories:
      "Error stack traces, request metadata. Personal data scrubbed before transmission.",
    location: "EU region (Frankfurt).",
    certifications: "SOC 2 Type II, ISO 27001.",
    dpa: "https://sentry.io/legal/dpa/",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <Prose>
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Legal · Sub-processors
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Sub-processors
          </h1>
          <p className="mt-3 text-sm text-foreground-muted">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED}>
              {new Date(LAST_UPDATED).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </header>

        <p className="lede">
          A sub-processor is a third party we use to help deliver
          DoraPilot. When you put data into the service, some of that
          data flows through the companies listed below. This page is
          the single source of truth — if it&apos;s not on this list,
          we&apos;re not using it.
        </p>

        <h2>What &quot;sub-processor&quot; means</h2>
        <p>
          Under GDPR Article 28 and DORA Article 30, we are the
          processor of your data and you are the controller. Any third
          party that processes your data on our behalf is a
          sub-processor. We are required to keep an up-to-date list of
          them, notify you of changes, and pass through equivalent
          data-protection obligations.
        </p>

        <h2>Current and planned sub-processors</h2>
        <p>
          We mark each entry as <strong>Current</strong> (in production
          today) or <strong>Planned</strong> (announced before paid
          signups open). Anything not on this list does not have access
          to your data.
        </p>

        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Status</th>
              <th>Function</th>
              <th>Data</th>
              <th>Location</th>
              <th>Certifications</th>
              <th>DPA</th>
            </tr>
          </thead>
          <tbody>
            {SUBPROCESSORS.map((sp) => (
              <tr key={sp.name}>
                <td>
                  <strong>{sp.name}</strong>
                </td>
                <td>
                  <span
                    className={
                      sp.status === "current"
                        ? "rounded-full bg-success-soft px-2 py-0.5 text-[11px] font-medium text-success"
                        : "rounded-full bg-background-muted px-2 py-0.5 text-[11px] font-medium text-foreground-muted"
                    }
                  >
                    {sp.status === "current" ? "Current" : "Planned"}
                  </span>
                </td>
                <td>{sp.function}</td>
                <td>{sp.dataCategories}</td>
                <td>{sp.location}</td>
                <td>{sp.certifications}</td>
                <td>
                  <a href={sp.dpa} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>How we choose sub-processors</h2>
        <ul>
          <li>
            <strong>EU-resident processing by default.</strong> Each
            provider must offer an EU region for the data we send them.
            Where the provider is headquartered outside the EU, we use
            their EU entity (e.g. Anthropic Ireland Ltd.) and configure
            EU endpoints.
          </li>
          <li>
            <strong>SOC 2 Type II or ISO 27001 as a minimum.</strong>{" "}
            We do not contract sub-processors that cannot produce a
            current independent assurance report.
          </li>
          <li>
            <strong>Written DPA before integration.</strong> A signed
            Article 28 data processing agreement is in place before any
            production data flows.
          </li>
          <li>
            <strong>Substitutability assessed.</strong> For every
            sub-processor we maintain a documented view of what it
            would take to replace them, in line with DORA Article 28&apos;s
            substitutability requirement.
          </li>
        </ul>

        <h2>How we notify you of changes</h2>
        <p>
          When we add, remove or replace a sub-processor that processes
          customer data, we:
        </p>
        <ol>
          <li>
            Update this page at least 30 days before the change takes
            effect.
          </li>
          <li>
            Email the change to the technical contact on each account
            (Pro and Partner plans) or post it in our changelog (Free
            and Starter plans).
          </li>
          <li>
            Provide an objection window: if you reasonably object on
            data-protection grounds, you can terminate the affected
            service with a pro-rata refund of unused fees.
          </li>
        </ol>
        <p>
          Subscribe to changes by emailing{" "}
          <a href="mailto:paulo@myneatflow.com">paulo@myneatflow.com</a>{" "}
          with the subject &quot;Subprocessor updates&quot;.
        </p>

        <h2>How we handle international transfers</h2>
        <p>
          We do not transfer customer data outside the European
          Economic Area as part of the standard service. Where a
          sub-processor is headquartered outside the EEA (the US, in
          practice), we contract with the provider&apos;s EU entity
          and process data in EU regions. We rely on the EU&ndash;US
          Data Privacy Framework and Standard Contractual Clauses as
          fallback safeguards.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this list, change-notification settings,
          or any sub-processor-related concern:{" "}
          <a href="mailto:paulo@myneatflow.com">paulo@myneatflow.com</a>.
          For data-subject requests, see our{" "}
          <a href="/legal/privacy">Privacy notice</a>.
        </p>
      </Prose>
    </article>
  );
}
