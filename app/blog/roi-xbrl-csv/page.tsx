import { ArticleHeader, Prose } from "@/components/Prose";
import { POSTS } from "../posts";

const post = POSTS.find((p) => p.slug === "roi-xbrl-csv")!;

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
          The Register of Information is the most concrete deliverable
          DORA asks of a financial entity, and the one most teams
          underestimate. The format is xBRL-CSV, not Excel. In the EBA
          dry-run for the April 2025 submission, around 94% of
          Excel-based files were rejected on technical grounds. Here&apos;s
          why, and how to produce one that actually validates.
        </p>

        <h2>What the Register of Information is</h2>
        <p>
          Article 28 of DORA requires every financial entity to maintain
          a comprehensive register of all contractual arrangements with
          ICT third-party service providers. The register lists who you
          contract with, what they do, where data is processed, whether
          the function is critical or important, what the substitutability
          looks like, who their sub-contractors are.
        </p>
        <p>
          Once a year — by 30 April for most entities — this register is
          submitted to the national competent authority (Central Bank of
          Ireland, BaFin, AMF, AFM, and so on), in a structured
          machine-readable format defined by the European Supervisory
          Authorities. That format is xBRL-CSV.
        </p>

        <h2>Why Excel doesn&apos;t work</h2>
        <p>
          The EBA does not accept your spreadsheet. The reason is not
          bureaucratic stubbornness — it&apos;s that supervisors across
          27 member states need to aggregate, query and cross-validate
          tens of thousands of registers. A spreadsheet is unreliable for
          this: free-text fields, ambiguous date formats, locale-specific
          decimal separators, merged cells, and no enforced relationships
          between rows.
        </p>
        <p>
          xBRL-CSV solves these problems by anchoring every value to a
          formally defined concept in a taxonomy. The EBA publishes the
          taxonomy (currently version 4.0) as a set of XSD and XML
          schema files. Your data is then expressed as CSV tables that
          point at concepts in that taxonomy, packaged in a ZIP with a
          report metadata file.
        </p>

        <blockquote>
          xBRL-CSV is, despite the name, not a CSV file. It is a ZIP
          package containing several CSV tables, a JSON metadata file,
          and references to a remote taxonomy. Opening one in Excel will
          show you the raw rows but tell you nothing about whether it
          will validate.
        </blockquote>

        <h2>What goes into a valid RoI</h2>
        <p>
          The EBA Implementing Technical Standard defines 15 templates
          (B_01.01 through B_07.01 in their numbering), each capturing a
          different aspect of the third-party landscape:
        </p>
        <table>
          <thead>
            <tr>
              <th>Template</th>
              <th>What it captures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B_01.01</td>
              <td>
                Entity maintaining the register, group structure, contact
                point.
              </td>
            </tr>
            <tr>
              <td>B_02.01–B_02.03</td>
              <td>
                Contractual arrangements with ICT providers, including
                contract reference, currency, annual cost.
              </td>
            </tr>
            <tr>
              <td>B_03.01–B_03.03</td>
              <td>
                ICT services covered by the contract, function supported,
                substitutability, criticality assessment.
              </td>
            </tr>
            <tr>
              <td>B_04.01</td>
              <td>
                ICT third-party providers themselves — legal name, LEI,
                country, type of provider.
              </td>
            </tr>
            <tr>
              <td>B_05.01–B_05.02</td>
              <td>
                ICT third-party providers signing the contract,
                relationships between providers (sub-outsourcing).
              </td>
            </tr>
            <tr>
              <td>B_06.01</td>
              <td>
                Functions of the entity supported by ICT services, with
                criticality.
              </td>
            </tr>
            <tr>
              <td>B_07.01</td>
              <td>
                Assessment of the ICT services supporting critical or
                important functions.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Each row in each table is constrained by data types (LEI must
          be 20 characters, ISO country codes only, ISO 4217 currency
          codes, ISO 8601 dates), by enumerations (function types are
          from a fixed list), and by cross-table relationships (a
          contract in B_02 must reference a provider in B_04).
        </p>

        <h2>The two failure modes</h2>
        <p>
          Submissions get rejected for two distinct reasons:
        </p>
        <h3>1. Technical validation failure</h3>
        <p>
          Wrong file structure, broken cross-references, invalid data
          types, missing mandatory fields. The EBA uses the open-source
          Arelle XBRL processor against the official taxonomy. If your
          file doesn&apos;t pass Arelle, it doesn&apos;t reach a human.
          This is what killed most of the dry-run submissions —
          well-intentioned Excel exports that looked correct but failed
          the XBRL formula checks.
        </p>
        <h3>2. Substantive review</h3>
        <p>
          The file validates, but the supervisor flags inconsistencies:
          a critical function with no exit plan, a sub-outsourcing chain
          that hits a known unreliable provider, missing notification of
          a previously declared contract. This is the second wave and is
          handled in correspondence with the supervisor over the weeks
          after submission.
        </p>

        <h2>The minimum viable workflow</h2>
        <p>
          You do not need an enterprise XBRL suite to submit. A working
          process for a small entity:
        </p>
        <ol>
          <li>
            Maintain the data in something queryable — a database, a
            structured spreadsheet, a CSV per template. Source of truth
            should not be a Word document.
          </li>
          <li>
            Standardise the foreign keys. Every ICT provider gets a stable
            internal ID; every contract too. Cross-table links must use
            these IDs consistently.
          </li>
          <li>
            Validate the LEIs. The Legal Entity Identifier is mandatory
            for in-scope providers — look them up at gleif.org. A wrong
            or missing LEI is the most common technical failure.
          </li>
          <li>
            Generate the xBRL-CSV package using a converter that targets
            the EBA taxonomy 4.0. Open-source options exist; commercial
            ones too.
          </li>
          <li>
            Validate locally with Arelle before submission. The EBA
            taxonomy includes formula linkbases that catch most issues
            before you upload.
          </li>
          <li>
            Submit through your national competent authority&apos;s
            portal. The format is the same EU-wide; the portal is
            country-specific.
          </li>
        </ol>

        <h2>What vendors should expect from their financial customers</h2>
        <p>
          If you sell ICT services to a regulated entity, you will be
          asked for the data needed to populate their register. Common
          questions:
        </p>
        <ul>
          <li>
            Your <strong>LEI</strong> (or a written explanation if you
            don&apos;t have one — most vendors under €5M revenue do
            not).
          </li>
          <li>
            Country of <strong>head office</strong> and countries of
            <strong> service delivery</strong>.
          </li>
          <li>
            A short, structured <strong>service description</strong> that
            can be mapped to the EBA function taxonomy.
          </li>
          <li>
            Names of any <strong>sub-contractors</strong> involved in
            delivering the service.
          </li>
          <li>
            Confirmation of <strong>data processing locations</strong>{" "}
            and whether anything leaves the EEA.
          </li>
        </ul>
        <p>
          Providing this as a pre-formatted document on your site (or in
          your DoraPilot workspace) saves hours of back-and-forth and
          shortens your customer&apos;s sales cycle.
        </p>

        <hr />
        <p className="text-sm text-foreground-muted">
          References: EBA Implementing Technical Standard on the
          Register of Information under Article 28(9) of DORA,
          consolidated text of Regulation (EU) 2022/2554, Arelle open
          source XBRL processor (arelle.org), GLEIF Legal Entity
          Identifier system (gleif.org).
        </p>
      </Prose>
    </article>
  );
}
