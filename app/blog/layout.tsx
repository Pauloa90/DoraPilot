import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="border-b border-border bg-background-muted">
          <div className="mx-auto max-w-3xl px-6 py-4 text-sm">
            <Link
              href="/blog"
              className="text-foreground-muted hover:text-foreground"
            >
              ← All articles
            </Link>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
