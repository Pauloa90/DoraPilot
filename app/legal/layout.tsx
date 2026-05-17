import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const LEGAL_NAV = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/dpa", label: "DPA" },
  { href: "/legal/subprocessors", label: "Sub-processors" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="border-b border-border bg-background-muted">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-sm">
            <span className="text-foreground-muted">Legal</span>
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
