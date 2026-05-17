import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "./posts";

export const metadata = {
  title: "DORA resources — DoraPilot blog",
  description:
    "Plain-language guides on DORA compliance, Article 30 contracts, Register of Information files, and EU bank vendor assessments.",
};

export default function BlogIndex() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Resources
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          DORA, demystified.
        </h1>
        <p className="mt-4 text-foreground-muted">
          Short, practical articles for ICT vendors and small EU financial
          entities figuring out DORA without a compliance department. Written
          in plain language — regulation references in parentheses, never in
          the way.
        </p>
      </div>

      <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-background">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block px-6 py-6 transition hover:bg-background-muted"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-foreground-subtle">
              <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">
                {post.tag}
              </span>
              <span>{post.readMinutes} min read</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {post.excerpt}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
              Read article
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
