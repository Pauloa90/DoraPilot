import Link from "next/link";

const ALL = [
  {
    href: "/compare/sprinto-vs-dorapilot",
    label: "DoraPilot vs Sprinto",
    desc: "DORA specialist vs multi-framework generalist.",
  },
  {
    href: "/compare/vanta-dora-alternative",
    label: "DoraPilot vs Vanta",
    desc: "EU DORA depth vs US-first automation platform.",
  },
  {
    href: "/compare/drata-vs-dorapilot",
    label: "DoraPilot vs Drata",
    desc: "Article 30 & Register of Information focus vs broad GRC suite.",
  },
  {
    href: "/templates/dora-article-30",
    label: "Free Article 30 template",
    desc: "The contract clauses your bank will demand — Markdown, CC BY 4.0.",
  },
  {
    href: "/blog/dora-explained",
    label: "DORA explained in 8 minutes",
    desc: "What the Digital Operational Resilience Act actually does.",
  },
];

export function RelatedLinks({ exclude = [] }: { exclude?: string[] }) {
  const items = ALL.filter((i) => !exclude.includes(i.href)).slice(0, 4);
  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
        Related
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="group block rounded-lg border border-border p-4 hover:border-foreground/30"
            >
              <span className="font-medium group-hover:text-accent">
                {i.label}
              </span>
              <span className="mt-1 block text-sm text-foreground-muted">
                {i.desc}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
