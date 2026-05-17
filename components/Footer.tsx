import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[11px] font-bold text-white">
                D
              </span>
              DoraPilot
            </Link>
            <p className="mt-3 max-w-xs text-sm text-foreground-muted">
              DORA compliance, demystified. Built in Dublin for EU teams who sell to banks
              and don&apos;t have a compliance department.
            </p>
            <p className="mt-4 text-xs text-foreground-subtle">
              © {new Date().getFullYear()} DoraPilot Ltd. EU VAT IE0000000A (pending).
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                ["How it works", "#how"],
                ["Features", "#features"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ],
            },
            {
              title: "Resources",
              links: [
                ["DORA explained", "/blog/dora-explained"],
                ["Article 30 guide", "/blog/article-30"],
                ["RoI xBRL-CSV guide", "/blog/roi-xbrl-csv"],
                ["AIB assessment guide", "/blog/aib-dora"],
              ],
            },
            {
              title: "Legal",
              links: [
                ["Privacy", "/legal/privacy"],
                ["Terms", "/legal/terms"],
                ["DPA", "/legal/dpa"],
                ["Sub-processors", "/legal/subprocessors"],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-foreground-muted hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-foreground-subtle">
          DoraPilot is a software tool, not a law firm or audit practice. Outputs are
          drafts intended for review and approval by a qualified compliance officer or
          auditor. Nothing on this site constitutes legal or regulatory advice.
        </div>
      </div>
    </footer>
  );
}
