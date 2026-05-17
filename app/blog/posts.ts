export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  publishedAt: string;
  tag: "Foundations" | "Vendors" | "Reporting" | "Banks";
};

export const POSTS: Post[] = [
  {
    slug: "dora-explained",
    title: "DORA explained in 8 minutes (without the legalese)",
    excerpt:
      "What the Digital Operational Resilience Act actually does, who it touches, and why your bank started sending you those questionnaires in 2025.",
    readMinutes: 8,
    publishedAt: "2026-04-22",
    tag: "Foundations",
  },
  {
    slug: "article-30",
    title: "DORA Article 30: the contract clauses your bank will demand",
    excerpt:
      "Right-of-audit, exit plans, sub-outsourcing chains. A line-by-line tour of what Article 30 puts in your next SaaS contract — and how to push back when needed.",
    readMinutes: 9,
    publishedAt: "2026-04-29",
    tag: "Vendors",
  },
  {
    slug: "roi-xbrl-csv",
    title: "Register of Information in xBRL-CSV: stop submitting Excel",
    excerpt:
      "94% of Excel-based RoI files were rejected in the EBA dry-run. Here's why, what xBRL-CSV is, and how to generate one without buying enterprise software.",
    readMinutes: 10,
    publishedAt: "2026-05-06",
    tag: "Reporting",
  },
  {
    slug: "aib-dora",
    title: "Replying to an AIB or Bank of Ireland DORA assessment",
    excerpt:
      "What Irish banks actually ask, where the Central Bank of Ireland's guidance lands, and a 5-day playbook for vendors who just received their first questionnaire.",
    readMinutes: 11,
    publishedAt: "2026-05-13",
    tag: "Banks",
  },
];
