import { Prose } from "@/components/Prose";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";

export const metadata = {
  title: "Privacy notice — DoraPilot",
  description:
    "What personal data DoraPilot collects, why, where it's stored, and how to exercise your rights under GDPR.",
};

const LAST_UPDATED = "2026-05-17";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Prose>
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Legal · Privacy
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Privacy notice
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

        <LegalDraftBanner />

        <p className="lede">
          Short version: we collect the minimum we need to run
          DoraPilot. We host it in the EU. We don&apos;t sell your
          data, we don&apos;t train AI models on it, and you can ask
          us to delete it at any time. The rest of this page is the
          longer version of those four sentences.
        </p>

        <h2>Who we are</h2>
        <p>
          DoraPilot is operated by DoraPilot Ltd., a private limited
          company registered in Ireland. Our registered office and
          contact for data-protection matters is
          <a href="mailto:paulo@myneatflow.com"> paulo@myneatflow.com</a>.
          We are the controller of the data described in the &quot;Marketing
          site&quot; and &quot;Account&quot; sections below. For data
          you upload into the product (assessments, vendor records),
          we act as your processor — see our{" "}
          <a href="/legal/dpa">Data Processing Agreement</a>.
        </p>

        <h2>What we collect, why, and how long we keep it</h2>

        <h3>Marketing site (this domain)</h3>
        <ul>
          <li>
            <strong>Server logs</strong> — IP address, request path,
            response status, user agent. Held by our hosting provider
            for 30 days. Used to detect abuse and debug outages.
          </li>
          <li>
            <strong>Privacy-friendly analytics</strong> — aggregated
            page views and conversion events with no cookies and no
            personal identifiers. Held for 24 months.
          </li>
          <li>
            <strong>Waitlist submissions</strong> — your email address
            and the persona you selected (vendor or financial entity).
            Held until you ask us to delete it or until 12 months after
            we close the waitlist.
          </li>
        </ul>

        <h3>Account (the product, when it opens)</h3>
        <ul>
          <li>
            <strong>Account profile</strong> — name, work email,
            organisation, role. Used to provide the service. Kept for
            the lifetime of the account plus 30 days after cancellation
            so you can export data.
          </li>
          <li>
            <strong>Billing information</strong> — invoicing details
            handled by our payment processor. We see the invoice
            metadata, not the card number. Kept for 7 years to meet
            Irish accounting law.
          </li>
          <li>
            <strong>Product activity logs</strong> — actions you take
            in the workspace, the audit trail, exports. Kept while the
            account is active.
          </li>
        </ul>

        <h3>Customer data you upload</h3>
        <p>
          Assessment responses, vendor records, policy drafts,
          uploaded files. We process this on your instructions, under
          the <a href="/legal/dpa">Data Processing Agreement</a>. We
          do not look at it except where strictly necessary to debug
          a support ticket you raised, and we never use it to train AI
          models.
        </p>

        <h2>The legal grounds we rely on</h2>
        <ul>
          <li>
            <strong>Contract (GDPR Art. 6(1)(b))</strong> — for
            account, product activity and billing data, processing is
            necessary to deliver the service you signed up for.
          </li>
          <li>
            <strong>Legitimate interest (Art. 6(1)(f))</strong> — for
            server logs and security telemetry, where we have a
            legitimate interest in keeping the service available and
            safe and our interest is not overridden by your rights.
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a))</strong> — only for the
            waitlist and optional marketing emails. You can withdraw
            at any time via the unsubscribe link.
          </li>
          <li>
            <strong>Legal obligation (Art. 6(1)(c))</strong> — for
            retaining invoice records to meet Irish tax and accounting
            law.
          </li>
        </ul>

        <h2>Who we share it with</h2>
        <p>
          We share data with the sub-processors listed on our{" "}
          <a href="/legal/subprocessors">Sub-processors page</a>, each
          bound by a written DPA. We do not sell data, do not share it
          with advertisers, and do not allow our sub-processors to
          process it for their own purposes.
        </p>
        <p>
          We will share data with a competent authority (e.g. the Data
          Protection Commission, Central Bank of Ireland) if legally
          required. We will tell you about the request unless we are
          legally prohibited.
        </p>

        <h2>Where the data lives</h2>
        <p>
          The data described above is stored in the European Union —
          primarily Frankfurt, with replicas in Dublin. Where a
          sub-processor is headquartered outside the EEA we contract
          with their EU entity and process data in EU regions only.
          The full picture is on the{" "}
          <a href="/legal/subprocessors">Sub-processors page</a>.
        </p>

        <h2>Your rights</h2>
        <p>
          Under GDPR you have the right to:
        </p>
        <ul>
          <li>Get a copy of your personal data we hold (Art. 15).</li>
          <li>
            Ask us to correct anything that&apos;s wrong (Art. 16).
          </li>
          <li>
            Ask us to delete your data when there&apos;s no legal
            reason for us to keep it (Art. 17).
          </li>
          <li>
            Ask us to restrict or object to certain processing (Arts.
            18 and 21).
          </li>
          <li>
            Receive your data in a portable format (Art. 20) — this
            includes exporting your assessment workspace.
          </li>
          <li>
            Withdraw any consent you&apos;ve given, without affecting
            past lawful processing.
          </li>
          <li>
            Lodge a complaint with the Irish Data Protection
            Commission (dataprotection.ie) or your local supervisory
            authority.
          </li>
        </ul>
        <p>
          To exercise any of these, email{" "}
          <a href="mailto:paulo@myneatflow.com">paulo@myneatflow.com</a>.
          We respond within 30 days; usually faster.
        </p>

        <h2>Security</h2>
        <p>
          We follow the controls our financial-entity customers
          expect of their vendors: encryption in transit (TLS 1.2+)
          and at rest (AES-256), MFA for staff accounts, least-privilege
          access, audit logging, regular vulnerability scans,
          third-party penetration tests, and an incident response
          process aligned with DORA Article 17 notification
          requirements.
        </p>

        <h2>Children</h2>
        <p>
          DoraPilot is a B2B compliance tool. It is not directed at
          children and we do not knowingly collect data from anyone
          under 16.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          We&apos;ll update this page when our processing changes. If
          the change is material, we&apos;ll notify account holders by
          email at least 30 days before the change takes effect.
        </p>

        <h2>Contact</h2>
        <p>
          Data Protection Officer (interim role, held by the founder
          until appointed):{" "}
          <a href="mailto:paulo@myneatflow.com">paulo@myneatflow.com</a>.
        </p>
      </Prose>
    </article>
  );
}
