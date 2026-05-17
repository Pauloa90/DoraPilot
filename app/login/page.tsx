import Link from "next/link";

export const metadata = {
  title: "Sign in — DoraPilot",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
      <Link href="/" className="mb-10 inline-flex items-center gap-2 font-semibold tracking-tight">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[11px] font-bold text-white">
          D
        </span>
        DoraPilot
      </Link>

      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-foreground-muted">
        Sign in to continue your DORA assessment workspace.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            disabled
            placeholder="you@yourcompany.io"
            className="mt-1.5 w-full rounded-md border border-border bg-background-muted px-3 py-2.5 text-sm placeholder:text-foreground-subtle"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            disabled
            placeholder="••••••••"
            className="mt-1.5 w-full rounded-md border border-border bg-background-muted px-3 py-2.5 text-sm placeholder:text-foreground-subtle"
          />
        </div>
        <button
          type="button"
          disabled
          className="w-full rounded-md bg-foreground py-2.5 text-sm font-medium text-white opacity-60"
        >
          Sign in (auth coming Q3 2026)
        </button>
      </form>

      <div className="mt-8 rounded-md border border-border bg-background-muted px-4 py-3 text-xs text-foreground-muted">
        Auth is wired against Supabase but the production keys aren&apos;t live yet.
        Join the{" "}
        <Link href="/#waitlist" className="text-accent hover:underline">
          early access list
        </Link>{" "}
        to get notified when signup opens.
      </div>
    </main>
  );
}
