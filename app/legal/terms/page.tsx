import Link from "next/link";
import { Prose } from "@/components/Prose";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";

export const metadata = {
  title: "Terms of service — DoraPilot",
  description:
    "What you get from DoraPilot, what we promise, what you can't do, and how to cancel.",
};

const LAST_UPDATED = "2026-05-17";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Prose>
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Legal · Terms
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Terms of service
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
          Short version: you pay a subscription, we provide the tool,
          you stay in control of your data and your compliance
          decisions. We&apos;re a software vendor — we don&apos;t
          replace your compliance officer or your auditor. The rest of
          this page makes that concrete.
        </p>

        <h2>Who these terms are between</h2>
        <p>
          Your contract is with <strong>DoraPilot Ltd.</strong>, a
          private limited company registered in Ireland (referred to
          below as &quot;we&quot;, &quot;us&quot; or &quot;DoraPilot&quot;).
          &quot;You&quot; means the organisation creating the account,
          acting through the individual who accepts these terms.
        </p>

        <h2>What we provide</h2>
        <ul>
          <li>
            A web application that helps you draft DORA assessment
            responses, generate Register of Information files in
            xBRL-CSV, produce policy documents, and maintain an audit
            trail of the work.
          </li>
          <li>
            Access via the subscription plan you select. The features
            included in each plan are listed at{" "}
            <Link href="/#pricing">dorapilot.com/#pricing</Link> at the
            time you sign up.
          </li>
          <li>
            Customer support during business hours (Dublin), within
            the response times stated for your plan.
          </li>
          <li>
            Updates and improvements as we ship them — included in
            your subscription at no extra cost.
          </li>
        </ul>

        <h2>What we do not provide</h2>
        <p>
          DoraPilot is a software tool. It is <strong>not</strong>:
        </p>
        <ul>
          <li>A law firm or audit practice.</li>
          <li>
            A regulated entity in its own right (we are not authorised
            by the Central Bank of Ireland).
          </li>
          <li>
            A substitute for review by a qualified compliance officer
            or auditor.
          </li>
        </ul>
        <p>
          The drafts we generate are starting points. You and your
          professional advisers are responsible for the final content
          and for any submissions to regulators or third parties.
          Nothing in the product or this site constitutes legal,
          regulatory, audit or financial advice.
        </p>

        <h2>Your account and your data</h2>
        <ul>
          <li>
            You are responsible for keeping your credentials secure
            and for the actions taken by people you invite to your
            workspace.
          </li>
          <li>
            You own the content you upload. We process it on your
            instructions under the{" "}
            <a href="/legal/dpa">Data Processing Agreement</a>.
          </li>
          <li>
            We will never train AI models on your content. We will
            never share your content with other customers.
          </li>
          <li>
            You can export your data in a usable format at any time,
            and for 30 days after cancellation.
          </li>
        </ul>

        <h2>What you can&apos;t do</h2>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>
            Use DoraPilot to break the law or to facilitate someone
            else doing so.
          </li>
          <li>
            Submit content that infringes anyone&apos;s intellectual
            property or privacy rights.
          </li>
          <li>
            Attempt to reverse-engineer, scrape, or overwhelm the
            service.
          </li>
          <li>
            Resell or sub-license DoraPilot to third parties without
            an explicit Partner agreement.
          </li>
          <li>
            Use the service in a way that would expose us to
            regulatory liability we did not contract for.
          </li>
        </ul>

        <h2>Fees and billing</h2>
        <ul>
          <li>
            Subscriptions are billed monthly or annually in advance,
            in euro, exclusive of VAT.
          </li>
          <li>
            Annual plans renew automatically on the anniversary date
            unless cancelled at least 30 days before.
          </li>
          <li>
            We may change pricing for future renewal terms with at
            least 60 days&apos; written notice. Your current term is
            not affected.
          </li>
          <li>
            If you upgrade mid-term, we pro-rate the difference. If
            you downgrade, the change applies at the next renewal.
          </li>
        </ul>

        <h2>Cancellation and exit</h2>
        <ul>
          <li>
            You can cancel any time from your dashboard. No email
            required, no retention call.
          </li>
          <li>
            Cancellation stops auto-renewal. We do not refund the
            unused portion of a paid term, except where required by
            law.
          </li>
          <li>
            For 30 days after cancellation you retain export-only
            access. After that, your data is deleted unless you ask
            us to retain it (we&apos;ll need a business reason).
          </li>
          <li>
            We will not charge an &quot;exit fee&quot; or hold your
            data hostage. DORA Article 30 requires this of our
            customers when they exit their own vendors; we apply the
            same standard to ourselves.
          </li>
        </ul>

        <h2>Availability</h2>
        <p>
          We target 99.9% monthly availability on Pro and Partner
          plans. If we fall materially below that, you can claim
          service credits per the schedule in your order form. We
          will publish historical uptime once the product is in
          production.
        </p>

        <h2>Suspension and termination by us</h2>
        <p>
          We may suspend your account on short notice if you breach
          these terms in a way that puts the service or other
          customers at risk (for example, abusive use, non-payment, or
          a credible regulatory order). We&apos;ll tell you what the
          issue is and give you a reasonable chance to fix it where
          possible.
        </p>

        <h2>Liability</h2>
        <p>
          Our liability is capped at the fees you paid in the 12
          months before the event giving rise to the claim. We
          don&apos;t exclude or cap liability for things the law
          won&apos;t let us (death and personal injury caused by our
          negligence, fraud, certain consumer rights). We are not
          liable for indirect losses, lost profits, or losses you
          could have avoided by reasonable mitigation.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by Irish law. Disputes go to the
          Irish courts. If you&apos;re a consumer in another EU
          country, you keep the rights given to you by your local
          consumer protection law.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We&apos;ll update this page when we change material terms.
          For changes that affect your rights or fees, we give at
          least 30 days&apos; notice by email before they take
          effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:paulo@myneatflow.com">paulo@myneatflow.com</a>.
        </p>
      </Prose>
    </article>
  );
}
