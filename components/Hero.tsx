"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, FileSpreadsheet } from "lucide-react";

type Persona = "vendor" | "entity";

const COPY: Record<
  Persona,
  {
    eyebrow: string;
    headline: React.ReactNode;
    sub: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    bullets: string[];
  }
> = {
  vendor: {
    eyebrow: "For ICT vendors selling to banks, insurers and fintechs",
    headline: (
      <>
        Reply to your bank&apos;s DORA assessment in{" "}
        <span className="text-accent">2 hours, not 60.</span>
      </>
    ),
    sub: "Stop losing weekends to vendor questionnaires. DoraPilot drafts your Article 30 responses, generates the policies your bank asks for, and keeps your auditor in the loop. Built for SaaS teams of 5–50.",
    primaryCta: "Run free 5-minute gap check",
    primaryHref: "#waitlist",
    secondaryCta: "See how it works",
    bullets: [
      "Article 30 contract annexes ready to sign",
      "Pre-filled answers from your existing ISO/SOC evidence",
      "Auditor co-sign workflow built in",
    ],
  },
  entity: {
    eyebrow: "For small banks, credit unions, payment institutions and fintechs",
    headline: (
      <>
        Build your Register of Information without the{" "}
        <span className="text-accent">xBRL-CSV nightmare.</span>
      </>
    ),
    sub: "94% of Excel-based RoI submissions were rejected in the European dry-run. DoraPilot converts your vendor data into valid xBRL-CSV — ready for the Central Bank, AFM, BaFin or your local supervisor.",
    primaryCta: "Try the free RoI checker",
    primaryHref: "#waitlist",
    secondaryCta: "See how it works",
    bullets: [
      "EBA taxonomy 4.0, validated with Arelle",
      "Tracks subcontracting chains and critical functions",
      "March submission window ready",
    ],
  },
};

export function Hero() {
  const [persona, setPersona] = useState<Persona>("vendor");
  const copy = COPY[persona];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
        {/* Persona toggle */}
        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Choose your persona"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1 shadow-sm"
          >
            <button
              role="tab"
              aria-selected={persona === "vendor"}
              onClick={() => setPersona("vendor")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                persona === "vendor"
                  ? "bg-foreground text-white"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <Shield className="h-3.5 w-3.5" />
              I&apos;m an ICT vendor
            </button>
            <button
              role="tab"
              aria-selected={persona === "entity"}
              onClick={() => setPersona("entity")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                persona === "entity"
                  ? "bg-foreground text-white"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              I&apos;m a financial entity
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground-muted">
            {copy.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {copy.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-foreground-muted">
            {copy.sub}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={copy.primaryHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-foreground/90 sm:w-auto"
            >
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#how"
              className="inline-flex w-full items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background-muted sm:w-auto"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
            {copy.bullets.map((b) => (
              <li key={b} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-success" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            { v: "22,000+", l: "EU entities under DORA" },
            { v: "94%", l: "Excel RoI rejections (dry-run)" },
            { v: "€8k+", l: "saved vs boutique auditor" },
            { v: "Q1 2027", l: "next RoI submission window" },
          ].map((s) => (
            <div key={s.l} className="bg-background px-6 py-6">
              <div className="text-3xl font-semibold tracking-tight">{s.v}</div>
              <div className="mt-1 text-sm text-foreground-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
