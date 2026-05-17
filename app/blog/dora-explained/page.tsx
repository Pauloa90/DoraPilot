import { ArticleHeader, Prose } from "@/components/Prose";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { POSTS } from "../posts";

const post = POSTS.find((p) => p.slug === "dora-explained")!;

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
          DORA is the EU&apos;s answer to a simple question: when a bank&apos;s
          payments app goes down because an outsourced cloud vendor had an
          incident, who is accountable? Since 17 January 2025, the answer is
          unambiguous — the bank is. And the bank now has to prove, with
          paperwork, that its vendors are up to the job. That paperwork is
          what arrives in your inbox.
        </p>

        <h2>What DORA actually is</h2>
        <p>
          The Digital Operational Resilience Act (Regulation (EU) 2022/2554)
          is a single rulebook that covers how financial entities in the
          European Union manage technology risk. It replaces a patchwork of
          national rules and EBA/EIOPA guidelines with one binding text that
          applies the same way in Dublin, Frankfurt, Madrid and Helsinki.
        </p>
        <p>
          The word &quot;regulation&quot; matters. Unlike a directive (which
          each country translates into its own law), a regulation is law on
          the day it enters into force. There is no Irish DORA or German
          DORA — just DORA. The Central Bank of Ireland, BaFin, the AMF and
          the other supervisors are tasked with enforcing the same text.
        </p>

        <h2>Who it applies to</h2>
        <p>
          Two broad groups, and the boundary between them is where most of
          the confusion lives.
        </p>
        <p>
          <strong>Financial entities</strong> — the obvious targets. Banks,
          insurance companies, investment firms, asset managers, payment
          institutions, e-money institutions, crypto-asset service providers,
          credit rating agencies, central counterparties, trading venues.
          Around 22,000 entities across the EU fall in this bucket. They
          must comply directly: governance, risk framework, incident
          reporting, testing, the lot.
        </p>
        <p>
          <strong>ICT third-party service providers</strong> — and this is
          where you, the SaaS founder, come in. DORA does not regulate you
          directly (with one exception we&apos;ll get to), but it forces
          your financial customers to push the entire framework down to you
          through contract. If you sell hosting, observability, data
          analytics, AI, KYC tooling, payroll, anything that touches a
          regulated entity, you will see DORA in your next renewal.
        </p>

        <blockquote>
          The exception: providers that supervisors classify as{" "}
          <strong>Critical Third-Party Providers (CTPPs)</strong> — typically
          the hyperscalers — fall under direct EU oversight via the Joint
          Oversight Framework. AWS, Microsoft, Google, IBM and a handful of
          others have been designated. If you&apos;re reading this article,
          you are almost certainly not a CTPP.
        </blockquote>

        <h2>The five pillars, in plain language</h2>
        <p>
          The regulation has five thematic chapters. Knowing what each one
          asks of you helps decode any vendor questionnaire — every
          question maps back to one of these.
        </p>

        <h3>1. ICT risk management (Art. 5–16)</h3>
        <p>
          The entity must have a documented framework for identifying,
          protecting against, detecting, responding to and recovering from
          ICT risks. The board has to sign it. The CISO has to maintain it.
          As a vendor, you&apos;ll be asked to show that your own risk
          framework is mature enough to plug into theirs.
        </p>

        <h3>2. Incident reporting (Art. 17–23)</h3>
        <p>
          Major ICT-related incidents have to be reported to the competent
          authority within tight deadlines — an initial notification within
          4 hours of classification, then intermediate and final reports.
          As a vendor, you need to be able to notify your financial
          customer fast enough that they can meet their own deadline. Most
          contracts now demand notification within 2 hours of you detecting
          a major incident.
        </p>

        <h3>3. Digital operational resilience testing (Art. 24–27)</h3>
        <p>
          Annual tests of critical systems. The largest entities also have
          to do threat-led penetration tests (TLPT) every three years, run
          against a real production environment by certified red teams. If
          you operate a system that supports a critical function for a
          large bank, expect to be in scope of their TLPT — which means
          someone with a contract will, lawfully, try to hack you.
        </p>

        <h3>4. ICT third-party risk (Art. 28–30)</h3>
        <p>
          The chapter that produces the most paperwork. The entity must
          maintain a Register of Information listing every ICT vendor (Art.
          28), classify which functions are critical or important (Art. 28
          again), include specific clauses in every contract (Art. 30),
          and have an exit plan for each critical vendor. We have a full
          article on Article 30 — most of the work landing on vendors comes
          from this chapter.
        </p>

        <h3>5. Information sharing (Art. 45)</h3>
        <p>
          Voluntary, lower-stakes: entities can join sector-wide
          threat-intelligence sharing arrangements. This rarely shows up
          in vendor questionnaires; mention it here only for completeness.
        </p>

        <h2>The deadlines that actually matter</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>17 Jan 2025</td>
              <td>DORA enters into force. Everything above is now law.</td>
            </tr>
            <tr>
              <td>30 Apr 2025</td>
              <td>
                First Register of Information due to national supervisors,
                in xBRL-CSV format. ~94% of dry-run submissions failed.
              </td>
            </tr>
            <tr>
              <td>Q3 2025 → ongoing</td>
              <td>
                Vendor renegotiation wave. Banks start sending Article 30
                contract addenda to every ICT supplier.
              </td>
            </tr>
            <tr>
              <td>Q1 2027</td>
              <td>
                Next annual RoI submission cycle. By now the bar will be
                higher and supervisors will reject for less.
              </td>
            </tr>
          </tbody>
        </table>

        <h2>What this means for you, concretely</h2>
        <p>
          If you sell ICT services into the EU financial sector, three
          things are likely to happen in the next six months:
        </p>
        <ol>
          <li>
            A bank or insurer client sends you a questionnaire of 30–80
            questions covering governance, security, BCP, sub-outsourcing
            and exit. They want it back in two weeks.
          </li>
          <li>
            Their procurement team sends a contract addendum amending your
            existing MSA to add Article 30 clauses. You have to sign or
            renegotiate.
          </li>
          <li>
            They ask whether your sub-processors are EU-resident and
            whether you can guarantee data does not leave the EEA.
          </li>
        </ol>
        <p>
          None of this is optional for them, so it stops being optional
          for you. The good news is that 80% of the answers don&apos;t
          change between clients — answer once, reuse forever.
        </p>

        <h2>Where to go next</h2>
        <p>
          Read{" "}
          <a href="/blog/article-30">
            DORA Article 30: the contract clauses your bank will demand
          </a>{" "}
          to understand what lands in your inbox next. If you&apos;re on the
          financial-entity side and dreading the RoI deadline, the{" "}
          <a href="/blog/roi-xbrl-csv">xBRL-CSV guide</a> is for you.
        </p>

        <hr />
        <p className="text-sm text-foreground-muted">
          This article references Regulation (EU) 2022/2554 of the European
          Parliament and of the Council, published in the Official Journal
          on 27 December 2022. Article numbers cited are from the
          consolidated text. Nothing here is legal advice — confirm with a
          qualified compliance officer or counsel before acting.
        </p>
      </Prose>
    </article>
  );
}
