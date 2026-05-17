import { ArticleHeader, Prose } from "@/components/Prose";
import { POSTS } from "../posts";

const post = POSTS.find((p) => p.slug === "aib-dora")!;

export const metadata = {
  title: `${post.title} — DoraPilot`,
  description: post.excerpt,
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <ArticleHeader
        tag={post.tag}
        title={post.title}
        publishedAt={post.publishedAt}
        readMinutes={post.readMinutes}
      />

      <Prose>
        <p className="lede">
          A DORA questionnaire from AIB, Bank of Ireland, PTSB or one
          of the credit unions doesn&apos;t look quite like one from a
          German or French bank. The structure follows the regulation
          but the local interpretation is shaped by the Central Bank of
          Ireland&apos;s expectations and by ten years of operational
          resilience supervision before DORA existed. Here&apos;s how
          to read it, and a 5-day playbook for vendors facing their
          first assessment.
        </p>

        <h2>What &quot;Irish DORA&quot; looks like in practice</h2>
        <p>
          DORA is a regulation, so the text is identical across the EU.
          What varies is the supervisor&apos;s reading. In Ireland three
          things shape how questionnaires are written and reviewed:
        </p>
        <h3>1. The Central Bank&apos;s prior framework</h3>
        <p>
          The Central Bank of Ireland published its Cross-Industry
          Guidance on Operational Resilience in December 2021 — three
          years before DORA went live. Irish entities have been
          operating with a five-stage operational resilience cycle
          (identify, map, set tolerance, test, learn) for years. When
          they ask you about your incident response or BCP, they are
          implicitly checking that you fit into that established
          vocabulary.
        </p>
        <h3>2. The PRISM supervisory model</h3>
        <p>
          The Central Bank classifies entities by impact (Ultra High,
          High, Medium-High, Medium-Low, Low) and uses that to set
          inspection cadence. Big retail banks (AIB, BOI) sit at the
          top — their compliance teams are large and well-rehearsed,
          and the questionnaires they send vendors are correspondingly
          detailed.
        </p>
        <h3>3. The dual-language context</h3>
        <p>
          Irish entities frequently service customers across Ireland
          and the UK. Many of their vendor questions about data
          residency, third-country transfers and consumer protection
          carry assumptions from both DORA and the UK FCA&apos;s
          operational resilience policy. If you serve both markets, be
          explicit about which controls apply where.
        </p>

        <h2>What an Irish bank actually asks</h2>
        <p>
          A typical AIB or BOI vendor assessment runs 60–80 questions
          across eight domains. The distribution looks like this:
        </p>
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Typical questions</th>
              <th>What they really want to see</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Governance</td>
              <td>5–8</td>
              <td>
                Named accountable officer, board-level visibility, ICT
                risk on the risk register.
              </td>
            </tr>
            <tr>
              <td>ICT risk management</td>
              <td>10–14</td>
              <td>
                A current risk framework, evidence it&apos;s reviewed
                annually, controls tied to identified risks.
              </td>
            </tr>
            <tr>
              <td>Information security</td>
              <td>12–18</td>
              <td>
                ISO 27001 or SOC 2 Type II in date; vulnerability
                management cadence; encryption at rest and in transit.
              </td>
            </tr>
            <tr>
              <td>Incident management</td>
              <td>6–10</td>
              <td>
                24/7 detection, named on-call rota, notification within
                2 hours, post-incident review process.
              </td>
            </tr>
            <tr>
              <td>BCP / DR</td>
              <td>6–8</td>
              <td>
                RTO and RPO targets, tested annually, evidence of the
                test outcome.
              </td>
            </tr>
            <tr>
              <td>Sub-outsourcing</td>
              <td>5–8</td>
              <td>
                Public sub-processor list, notice mechanism, no critical
                function delivered from outside the EEA without
                justification.
              </td>
            </tr>
            <tr>
              <td>Exit and transition</td>
              <td>4–6</td>
              <td>
                Documented exit plan, data portability, cooperation in a
                supervisor-ordered exit.
              </td>
            </tr>
            <tr>
              <td>Audit and assurance</td>
              <td>3–5</td>
              <td>
                Right of audit accepted, evidence of recent independent
                assurance, willingness to participate in TLPT.
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Where Irish banks differ from continental ones</h2>
        <ul>
          <li>
            <strong>More weight on individual accountability.</strong>{" "}
            Ireland has the Senior Executive Accountability Regime
            (SEAR) for regulated entities. Even when SEAR doesn&apos;t
            apply to you the vendor, the bank&apos;s third-party risk
            officer is conditioned to ask &quot;who is the named owner
            for this?&quot; on every control.
          </li>
          <li>
            <strong>Stricter on data location.</strong> Irish banks
            often ask vendors to confirm not just that data is in the
            EEA but that any failover or backup region is also EEA.
            Vendors with a US disaster-recovery region get probed
            harder than those with EU-only architecture.
          </li>
          <li>
            <strong>UK awareness.</strong> If your vendor footprint
            includes UK regions or UK sub-contractors, expect
            questions framed around the FCA&apos;s critical third-party
            framework as well as DORA. A short statement of how the
            two regimes line up saves a follow-up cycle.
          </li>
          <li>
            <strong>Tolerance for credit-union vendors.</strong> Smaller
            entities (credit unions, small EMIs) are still required to
            comply, but their questionnaires are leaner — typically
            30–40 questions, often based on the Irish League of Credit
            Unions template.
          </li>
        </ul>

        <h2>A 5-day playbook for your first Irish assessment</h2>
        <p>
          You&apos;ve just received a 70-question PDF from a bank&apos;s
          third-party risk team. Two-week deadline. Here&apos;s how to
          spend the first five working days.
        </p>
        <h3>Day 1 — Read, classify, scope</h3>
        <p>
          Read every question. Tag each with the domain (use the eight
          above). Identify the 10–15 questions where you&apos;ll need
          help from outside engineering (legal, exec sponsor, finance).
          Schedule those calls now.
        </p>
        <h3>Day 2 — Harvest existing evidence</h3>
        <p>
          ISO 27001 audit report, SOC 2 Type II, pen-test summary, BCP
          test report, DPA, sub-processor list, security whitepaper.
          Roughly 60% of the answers come straight out of these. Build
          a single shared folder.
        </p>
        <h3>Day 3 — Draft the substantive answers</h3>
        <p>
          Work domain by domain. Keep answers short and factual; cite
          the evidence document by name. The bank&apos;s reviewer is
          looking for &quot;yes, here&apos;s the proof&quot;, not
          marketing.
        </p>
        <h3>Day 4 — Review with legal and exec</h3>
        <p>
          The questions on liability, audit rights, sub-outsourcing
          notice and termination need a sign-off. This is where you
          decide what to push back on. Your{" "}
          <a href="/blog/article-30">Article 30 cheat sheet</a> is
          useful here.
        </p>
        <h3>Day 5 — Polish, sanity-check, submit</h3>
        <p>
          Every answer must reference a real document. Every &quot;not
          applicable&quot; needs a one-line justification. Every
          forward-looking commitment needs a date. Submit through the
          bank&apos;s portal (BIA, ServiceNow, OneTrust — varies) with
          a short cover note acknowledging the deadline.
        </p>

        <h2>What happens after submission</h2>
        <p>
          Two outcomes are common:
        </p>
        <ol>
          <li>
            <strong>Clarification round.</strong> The reviewer comes
            back with 5–15 follow-up questions, usually targeting the
            sub-outsourcing chain and the exit plan. Quick turnaround
            (3 working days) keeps momentum.
          </li>
          <li>
            <strong>Pass with conditions.</strong> The contract goes
            ahead but with commitments: annual re-attestation, named
            point of contact, participation in the bank&apos;s next
            TLPT cycle.
          </li>
        </ol>
        <p>
          Plan to reuse 80% of these answers when the next Irish bank
          (or any EU bank) sends you their version.
        </p>

        <hr />
        <p className="text-sm text-foreground-muted">
          References: Central Bank of Ireland Cross-Industry Guidance
          on Operational Resilience (December 2021), the Central Bank
          of Ireland&apos;s DORA implementation page, EBA Implementing
          Technical Standards under Regulation (EU) 2022/2554, and
          public vendor-assessment templates from Irish retail banks.
        </p>
      </Prose>
    </article>
  );
}
