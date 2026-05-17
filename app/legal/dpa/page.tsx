import { Prose } from "@/components/Prose";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";

export const metadata = {
  title: "Data Processing Agreement — DoraPilot",
  description:
    "GDPR Article 28 data processing agreement between DoraPilot and customers, in plain language.",
};

const LAST_UPDATED = "2026-05-17";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Prose>
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Legal · DPA
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Data Processing Agreement
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
          This DPA is the GDPR Article 28 agreement between you (the
          controller) and DoraPilot Ltd. (the processor) covering the
          personal data you put into the product. It also covers what
          we do for DORA Article 30 purposes when your customers ask
          about your sub-contractors. Plain language, no annexes you
          have to print and sign.
        </p>

        <h2>1. Who&apos;s who</h2>
        <p>
          You are the <strong>controller</strong>: you decide what
          personal data goes into the workspace, why, and for how
          long. DoraPilot Ltd. is the <strong>processor</strong>: we
          act only on your documented instructions. Our default
          instructions are these terms; you can issue further written
          instructions through your account.
        </p>

        <h2>2. What this covers</h2>
        <ul>
          <li>
            <strong>Subject matter</strong> — the processing
            necessary to provide the DoraPilot service to you.
          </li>
          <li>
            <strong>Duration</strong> — for as long as your
            subscription is active, plus the 30-day export window
            after cancellation.
          </li>
          <li>
            <strong>Nature and purpose</strong> — storing your
            assessment content, processing it through our application
            and through the sub-processors listed on our{" "}
            <a href="/legal/subprocessors">Sub-processors page</a>,
            and generating outputs (drafts, exports, audit trail).
          </li>
          <li>
            <strong>Types of data</strong> — business contact details
            (names, work emails, roles), vendor contractual data
            (counterparty names, addresses, contract metadata),
            assessment content, audit trail. We do not expect special
            category data under GDPR Art. 9; if you upload it, please
            tell us so we can apply extra controls.
          </li>
          <li>
            <strong>Categories of data subjects</strong> — your
            employees, your customers&apos; representatives, employees
            of your ICT vendors, and anyone else named in the
            assessment content you upload.
          </li>
        </ul>

        <h2>3. What we promise</h2>
        <ol>
          <li>
            We process your personal data <strong>only on your
            instructions</strong>. If a law requires us to process it
            differently, we&apos;ll tell you first unless the law
            forbids that.
          </li>
          <li>
            Everyone on our team with access is under{" "}
            <strong>written confidentiality obligations</strong> and
            trained on data protection.
          </li>
          <li>
            We apply <strong>appropriate technical and
            organisational measures</strong> per GDPR Art. 32. The
            controls are summarised in the &quot;Security&quot; section
            of our <a href="/legal/privacy">Privacy notice</a> and
            described in detail in our Security whitepaper (available
            on request).
          </li>
          <li>
            We help you respond to <strong>data subject
            requests</strong> in good time — exports, deletion,
            rectification — using the product&apos;s built-in tools.
          </li>
          <li>
            We notify you of a <strong>personal data breach</strong>{" "}
            without undue delay and within 48 hours of becoming aware,
            with the information you need to make your own
            notification under GDPR Art. 33.
          </li>
          <li>
            We support your <strong>DPIAs and prior
            consultations</strong> with supervisors by providing
            documentation about our processing on reasonable request.
          </li>
          <li>
            We delete or return your personal data at the end of the
            service, at your choice, except where retention is
            required by law.
          </li>
          <li>
            We make available the information needed to{" "}
            <strong>demonstrate our compliance</strong> with this DPA
            and contribute to audits as set out in section 6 below.
          </li>
        </ol>

        <h2>4. Sub-processors</h2>
        <p>
          You give general authorisation to use the sub-processors
          listed on our{" "}
          <a href="/legal/subprocessors">Sub-processors page</a>. We
          will:
        </p>
        <ul>
          <li>
            Keep that list current and tell you in advance of any
            additions or replacements (see the change-notification
            mechanism on that page).
          </li>
          <li>
            Impose data protection obligations on each sub-processor
            that are no less protective than those in this DPA.
          </li>
          <li>
            Remain liable to you for the acts and omissions of our
            sub-processors as if they were our own.
          </li>
          <li>
            Give you a fair opportunity to object to a new
            sub-processor on reasonable data-protection grounds. If
            we can&apos;t resolve the objection, you can terminate
            the affected service with a pro-rata refund.
          </li>
        </ul>

        <h2>5. International transfers</h2>
        <p>
          We process your personal data in the EU. Where a
          sub-processor is headquartered outside the EEA, we contract
          with its EU entity and use EU regions. If a transfer is
          ever necessary, we rely on the EU&ndash;US Data Privacy
          Framework where the recipient is certified, or on Standard
          Contractual Clauses with supplementary measures as fallback.
        </p>

        <h2>6. Audits</h2>
        <ul>
          <li>
            You may audit our compliance with this DPA once per year
            (or more often if a regulator orders it or a material
            incident occurs).
          </li>
          <li>
            We&apos;ll usually satisfy audit requests by sharing our
            most recent independent assurance report (SOC 2 Type II
            and ISO 27001 once issued) under NDA. If that doesn&apos;t
            answer the question, we&apos;ll cooperate with an on-site
            audit with reasonable notice and scope.
          </li>
          <li>
            If you&apos;re a regulated financial entity subject to
            DORA Art. 30, your audit rights and your supervisor&apos;s
            audit rights are unaffected. We won&apos;t use this DPA
            to limit a supervisor&apos;s right of access.
          </li>
        </ul>

        <h2>7. Liability and order of precedence</h2>
        <p>
          The liability cap in our{" "}
          <a href="/legal/terms">Terms of service</a> applies to this
          DPA, except where law says otherwise. If this DPA conflicts
          with another document we both signed, the order of
          precedence is: (1) any signed order form, (2) this DPA, (3)
          the Terms of service.
        </p>

        <h2>8. Term and termination</h2>
        <p>
          This DPA is effective when you start using DoraPilot and
          continues for as long as we process your personal data.
          Termination of the underlying service ends this DPA, with
          the deletion and export obligations in section 3(7) and
          the 30-day window in the Terms.
        </p>

        <h2>9. Updates</h2>
        <p>
          We&apos;ll publish updates to this DPA on this page. For
          material changes (anything that materially reduces your
          rights or our obligations) we give 30 days&apos; notice by
          email.
        </p>

        <h2>10. Contact</h2>
        <p>
          Data protection matters and urgent incidents:{" "}
          <a href="mailto:paulo@myneatflow.com">
            paulo@myneatflow.com
          </a>
          . We aim to acknowledge within one business day; dedicated
          incident response email and 24/7 monitoring will be set up
          before paid plans open.
        </p>
      </Prose>
    </article>
  );
}
