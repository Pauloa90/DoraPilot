type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export function JsonLd({ data }: { data: Record<string, JsonValue> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DoraPilot",
  alternateName: "DoraPilot Ltd.",
  url: "https://dorapilot.com",
  logo: "https://dorapilot.com/icon.svg",
  description:
    "DORA compliance tooling for small ICT vendors and SME EU financial entities. Reply to bank questionnaires in hours, generate Register of Information files in xBRL-CSV.",
  email: "paulo@myneatflow.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DoraPilot",
  url: "https://dorapilot.com",
  publisher: { "@type": "Organization", name: "DoraPilot" },
  inLanguage: "en-GB",
};

export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "DoraPilot" },
    publisher: {
      "@type": "Organization",
      name: "DoraPilot",
      logo: {
        "@type": "ImageObject",
        url: "https://dorapilot.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dorapilot.com/blog/${post.slug}`,
    },
  };
}

export function faqPageSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
