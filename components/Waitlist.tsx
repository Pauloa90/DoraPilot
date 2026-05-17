"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [persona, setPersona] = useState<"vendor" | "entity">("vendor");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    // Submit to Netlify Forms: form-encoded POST to "/" with form-name field.
    // The static form in public/__forms.html declares the schema; this
    // submission matches it by name. Email notifications are configured in
    // the Netlify dashboard under Forms → waitlist → Form notifications.
    const body = new URLSearchParams({
      "form-name": "waitlist",
      email,
      persona,
      submittedAt: new Date().toISOString(),
    });

    try {
      // POST to the static __forms.html (not "/") so Netlify Edge handles
      // the submission directly. With Next.js + @netlify/plugin-nextjs,
      // POSTs to "/" hit the Next.js server first and bypass Netlify Forms.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="waitlist" className="border-b border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Early access
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          Q1 2027 RoI cycle is closer than you think.
        </h2>
        <p className="mt-4 text-foreground-muted">
          Join the waitlist. We onboard the first 50 teams personally, at €29/month locked
          for the first year. No salesperson will call you — just a Loom from the founder
          when your slot is ready.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-10 inline-flex items-start gap-3 rounded-xl border border-success/30 bg-success-soft px-5 py-4 text-left">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <div>
              <div className="font-medium text-success">You&apos;re on the list.</div>
              <div className="mt-1 text-sm text-foreground-muted">
                Check your inbox for a confirmation. We&apos;ll be in touch within a week.
              </div>
            </div>
          </div>
        ) : (
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-lg space-y-3 text-left"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <p hidden>
              <label>Don&apos;t fill this: <input name="bot-field" /></label>
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1 text-xs">
                {(["vendor", "entity"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPersona(p)}
                    className={`rounded-full px-3 py-1 font-medium transition ${
                      persona === p
                        ? "bg-foreground text-white"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {p === "vendor" ? "ICT vendor" : "Financial entity"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourcompany.io"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-foreground-subtle focus:border-accent focus:outline-none"
              />
              <input type="hidden" name="persona" value={persona} />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-white hover:bg-foreground/90 disabled:opacity-60"
              >
                {status === "submitting" ? "Joining…" : "Join waitlist"}
              </button>
            </div>

            {status === "error" && error && (
              <div className="flex items-start gap-2 rounded-md border border-danger/30 bg-danger-soft px-3 py-2 text-sm text-danger">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <p className="text-center text-xs text-foreground-subtle">
              By joining, you agree to occasional product updates. No spam, unsubscribe in
              one click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
