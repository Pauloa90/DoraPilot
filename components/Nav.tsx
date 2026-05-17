import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[11px] font-bold text-white">
            D
          </span>
          DoraPilot
        </Link>

        <div className="hidden items-center gap-8 text-sm text-foreground-muted md:flex">
          <Link href="#how" className="hover:text-foreground">How it works</Link>
          <Link href="#features" className="hover:text-foreground">Features</Link>
          <Link href="#pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="#faq" className="hover:text-foreground">FAQ</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-foreground-muted hover:text-foreground sm:inline-block"
          >
            Sign in
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex items-center rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-white hover:bg-foreground/90"
          >
            Get early access
          </Link>
        </div>
      </nav>
    </header>
  );
}
