import { ReactNode } from "react";

/**
 * Article wrapper. Provides typographic defaults (no Tailwind Typography plugin
 * needed — we hand-tune the few elements we actually use).
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-doc text-[15.5px] leading-[1.7] text-foreground">
      <style>{`
        .prose-doc h2 {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.018em;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-doc h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .prose-doc p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        .prose-doc p.lede {
          font-size: 1.125rem;
          color: var(--foreground-muted);
          margin-bottom: 2rem;
        }
        .prose-doc ul, .prose-doc ol {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-left: 1.25rem;
        }
        .prose-doc ul { list-style: disc; }
        .prose-doc ol { list-style: decimal; }
        .prose-doc li { margin-top: 0.4rem; }
        .prose-doc a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-doc a:hover { opacity: 0.8; }
        .prose-doc blockquote {
          border-left: 3px solid var(--accent);
          background: var(--accent-soft);
          padding: 0.9rem 1.1rem;
          margin: 1.25rem 0;
          border-radius: 0 6px 6px 0;
          color: var(--foreground);
        }
        .prose-doc blockquote p { margin: 0; font-size: 0.95rem; }
        .prose-doc code {
          background: var(--background-muted);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 0.1rem 0.35rem;
          font-size: 0.88em;
          font-family: var(--font-geist-mono), ui-monospace, monospace;
        }
        .prose-doc strong { font-weight: 600; }
        .prose-doc hr {
          border: 0;
          border-top: 1px solid var(--border);
          margin: 2.5rem 0;
        }
        .prose-doc table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.92rem;
        }
        .prose-doc th, .prose-doc td {
          border: 1px solid var(--border);
          padding: 0.55rem 0.75rem;
          text-align: left;
          vertical-align: top;
        }
        .prose-doc th {
          background: var(--background-muted);
          font-weight: 600;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--foreground-muted);
        }
      `}</style>
      {children}
    </div>
  );
}

export function ArticleHeader({
  tag,
  title,
  publishedAt,
  readMinutes,
}: {
  tag: string;
  title: string;
  publishedAt: string;
  readMinutes: number;
}) {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-foreground-subtle">
        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">
          {tag}
        </span>
        <span>{readMinutes} min read</span>
        <span>·</span>
        <time dateTime={publishedAt}>
          {new Date(publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h1>
    </header>
  );
}
