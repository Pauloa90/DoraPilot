import { ArticleHeader, Prose } from "@/components/Prose";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { POSTS } from "../posts";

const post = POSTS.find((p) => p.slug === "article-30")!;

export const metadata = {
  title: `${post.title} — DoraPilot`,
  description: post.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <JsonLd data={articleSchema(post)} />
      <ArticleHeader
        tag={post.tag}
        title={post.title}
        publishedAt={post.publishedAt}
        readMinutes={post.readMinutes}
      />

      <Prose>
        <p className="lede">
          Article 30 is the part of DORA that lands in your inbox as a
          PDF. Every ICT contract with a regulated EU financial entity
          must contain a list of specific clauses — what they cover, what
          they hand to your customer, and where you have legitimate room
          to negotiate. Here&apos;s the line-by-line tour.
        </p>

        <h2>The structure: two tiers of contracts</h2>
        <p>
          Article 30 splits ICT contracts into two buckets. The bucket
          you&apos;re in determines how much paperwork you sign.
        </p>
        <p>
          <strong>Tier 1 — every ICT contract.</strong> Even if you sell a
          €99/month observability tool to a small fintech, the contract
          must cover the items in Article 30(2): clear description of
          services, locations of processing, data protection terms,
          service level definitions, assistance to the entity at no extra
          cost during incidents, cooperation with supervisors, exit
          rights, and termination triggers.
        </p>
        <p>
          <strong>Tier 2 — contracts supporting critical or important
          functions.</strong> If what you sell helps the entity perform
          a regulated activity (think: core banking, payments routing,
          KYC, customer authentication, claims handling), Article 30(3)
          adds a heavier layer: full service descriptions per location,
          notice periods for sub-outsourcing, audit rights including
          on-site inspections, participation in TLPT, detailed exit and
          transition plans.
        </p>

        <blockquote>
          You don&apos;t get to decide which tier you&apos;re in — the
          financial entity does, based on their internal classification.
          If a bank decides your tool supports a critical function, you
          are in Tier 2 whether you agree or not.
        </blockquote>

        <h2>The eight clauses every contract needs (Art. 30(2))</h2>
        <ol>
          <li>
            <strong>Service description.</strong> What you do, who does it,
            from where. Vague &quot;cloud services&quot; won&apos;t fly —
            list the modules and the regions.
          </li>
          <li>
            <strong>Locations of processing.</strong> Where the data sits
            at rest, where it&apos;s processed, where you back it up. If
            anything is outside the EEA, flag it and justify it.
          </li>
          <li>
            <strong>Data protection.</strong> A GDPR-aligned data
            processing clause or annex — usually a separate DPA. Your{" "}
            <a href="/legal/dpa">DPA template</a> goes here.
          </li>
          <li>
            <strong>Service levels.</strong> Measurable SLA targets and
            what happens when you miss them. Credits are common; some
            banks insist on termination rights after repeated breach.
          </li>
          <li>
            <strong>Assistance during incidents.</strong> When their
            customer is screaming and your service is the cause, you have
            to help &quot;without additional cost or at a cost determined
            ex-ante.&quot; Translation: 24/7 incident support cannot be a
            separate paid SKU.
          </li>
          <li>
            <strong>Cooperation with supervisors.</strong> If the Central
            Bank of Ireland, BaFin, AMF or another competent authority
            asks for information about the services, you cooperate.
            Refusing on commercial-confidentiality grounds is not
            available.
          </li>
          <li>
            <strong>Termination triggers.</strong> The entity must be able
            to terminate for material breach, for repeated SLA failure,
            for changes in your security posture, and on instruction from
            a supervisor.
          </li>
          <li>
            <strong>Exit cooperation.</strong> When they leave, you help
            them leave. Data export in a usable format, transition window,
            destruction certificate.
          </li>
        </ol>

        <h2>The extra clauses for critical/important services (Art. 30(3))</h2>
        <p>
          Six additional items, each of which extends one of the above:
        </p>
        <ol>
          <li>
            <strong>Detailed scope per location.</strong> If you process in
            Frankfurt and back up in Dublin, both are described
            individually. Sub-processors per location are named.
          </li>
          <li>
            <strong>Reporting and monitoring.</strong> Periodic reports on
            performance, security events, capacity. Format and cadence
            agreed upfront.
          </li>
          <li>
            <strong>Sub-outsourcing notice.</strong> You must notify the
            entity in writing before adding, removing or replacing any
            sub-processor that supports a critical function. Notice
            periods of 30–90 days are typical. The entity can object.
          </li>
          <li>
            <strong>Right of audit.</strong> The entity, its auditors and
            its competent authority can audit you. Includes on-site
            inspections, document reviews, interviews of staff. You can
            negotiate cadence (typically once per year), scope and
            notice — but you cannot deny the right itself.
          </li>
          <li>
            <strong>TLPT participation.</strong> If the entity runs a
            threat-led penetration test under Art. 26, you participate.
            That means an authorised red team will, lawfully, attack
            systems that touch the entity&apos;s production environment.
          </li>
          <li>
            <strong>Exit strategy.</strong> Not just &quot;we&apos;ll help
            you leave.&quot; A documented exit plan: time to migrate,
            assistance available, format of data, who pays for what. The
            entity must be able to leave without significant disruption,
            even if you&apos;re uncooperative.
          </li>
        </ol>

        <h2>Where you can legitimately push back</h2>
        <p>
          Article 30 is mandatory, but the implementation isn&apos;t. You
          have room to negotiate on:
        </p>
        <ul>
          <li>
            <strong>Audit cadence and scope.</strong> Annual, with 30 days
            notice, scoped to relevant controls. Continuous on-site
            access for an unlimited team is not in the regulation.
          </li>
          <li>
            <strong>Audit cost-sharing.</strong> If the entity wants more
            than the standard annual audit, the contract can fairly
            allocate cost.
          </li>
          <li>
            <strong>Notification windows.</strong> The regulation requires
            timely notification of major incidents. Two hours is a common
            ask. Anything tighter than that should come with a service
            credit, because it shifts your engineering ops.
          </li>
          <li>
            <strong>Sub-processor list mechanics.</strong> Maintaining a
            <a href="/legal/subprocessors"> public sub-processor page</a>{" "}
            with an opt-in change-notification feed is industry standard
            and usually accepted in place of bespoke per-customer notice.
          </li>
        </ul>

        <h2>Where you cannot push back</h2>
        <ul>
          <li>
            Cooperation with competent authorities. Non-negotiable.
          </li>
          <li>
            Exit assistance at reasonable cost. The regulation explicitly
            forbids lock-in via prohibitive exit pricing.
          </li>
          <li>
            Disclosure of sub-outsourcing chain for critical functions.
            The entity has a regulatory obligation to know.
          </li>
          <li>
            Termination rights on supervisor instruction. Even if your
            commercial argument is watertight, a supervisor&apos;s order
            wins.
          </li>
        </ul>

        <h2>The practical checklist</h2>
        <p>
          When your customer&apos;s procurement team sends the contract
          addendum, work through it in this order:
        </p>
        <ol>
          <li>
            Confirm the tier. Are you in Tier 2 (critical/important
            function) or Tier 1?
          </li>
          <li>
            Map each proposed clause to one of the eight (or fourteen)
            items above. If a clause has no Article 30 home, it&apos;s
            negotiable on commercial grounds — push back.
          </li>
          <li>
            Identify the three or four clauses that would actually change
            your operating model (audit, notification, sub-processor
            notice). Negotiate those carefully.
          </li>
          <li>
            Reuse. The addendum from Bank A becomes the template for
            Banks B, C and D — with maybe 10% local variation.
          </li>
        </ol>

        <hr />
        <p className="text-sm text-foreground-muted">
          References to Article 30 are from Regulation (EU) 2022/2554.
          Read together with the EBA Final Report on the
          implementation of the Joint Oversight Framework and the
          national supervisor guidance for your customer&apos;s
          jurisdiction. Not legal advice — confirm contract language
          with counsel.
        </p>
      </Prose>
    </article>
  );
}
