"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

type Cycle = "monthly" | "annual";

type Tier = {
  name: string;
  tag?: string;
  priceMonthly: number;
  priceAnnualPerMonth: number;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
  isContactSales?: boolean;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    name: "Free Assessment",
    priceMonthly: 0,
    priceAnnualPerMonth: 0,
    blurb: "Find out what your bank will ask before they ask it.",
    features: [
      "10-question DORA gap analysis",
      "PDF report with concrete next steps",
      "Mapping to your existing ISO/SOC evidence",
      "No credit card, no demo call",
    ],
    cta: "Start free",
  },
  {
    name: "Starter",
    tag: "DORA-only",
    priceMonthly: 49,
    priceAnnualPerMonth: 41,
    blurb: "For solo CTOs answering a first DORA assessment.",
    features: [
      "1 financial client tracked",
      "Full DORA questionnaire engine (8 domains)",
      "5 policy templates (ICT RMF, BCP, Incident, Exit, Art. 30)",
      "PDF export, branded with your logo",
      "Email support, under 48h response",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Pro",
    tag: "Most chosen",
    priceMonthly: 99,
    priceAnnualPerMonth: 83,
    blurb: "For SaaS teams of 5–50 with multiple bank clients.",
    features: [
      "Unlimited bank clients & assessments",
      "DORA + GDPR + ISO 27001 + SOC 2 mapping",
      "Register of Information generator (xBRL-CSV)",
      "Immutable audit trail (SHA-256 chain)",
      "Auditor co-sign workflow",
      "Slack/email support, under 24h response",
    ],
    cta: "Start Pro trial",
    featured: true,
    badge: "Recommended",
  },
  {
    name: "Partner",
    tag: "With consultant",
    priceMonthly: 499,
    priceAnnualPerMonth: 416,
    blurb: "For boutique auditors and white-label resellers.",
    features: [
      "Everything in Pro, unlimited",
      "1-hour monthly call with a DORA compliance consultant",
      "White-label branding (your logo, your domain)",
      "Up to 10 client orgs managed in one workspace",
      "Co-marketing & lead-sharing program",
      "Priority support, under 4h response",
    ],
    cta: "Talk to us",
    isContactSales: true,
  },
];

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Less than a Sprinto Starter, more than enough for your first assessment.
          </h2>
          <p className="mt-4 text-foreground-muted">
            All plans include EU data residency, public sub-processor list, and a
            no-questions-asked cancellation policy. Annual saves ~16%.
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1">
            {(["monthly", "annual"] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                  cycle === c
                    ? "bg-foreground text-white"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {c === "annual" ? "Annual · save 16%" : "Monthly"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => {
            const price =
              cycle === "annual" ? t.priceAnnualPerMonth : t.priceMonthly;
            return (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-xl border p-6 ${
                  t.featured
                    ? "border-foreground bg-foreground text-white shadow-lg lg:scale-[1.02]"
                    : "border-border bg-background"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-warning px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {t.badge}
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  {t.tag && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        t.featured
                          ? "bg-white/15 text-white"
                          : "bg-background-muted text-foreground-muted"
                      }`}
                    >
                      {t.tag}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-2 text-sm ${
                    t.featured ? "text-white/70" : "text-foreground-muted"
                  }`}
                >
                  {t.blurb}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-semibold ${
                      t.featured ? "text-white" : ""
                    }`}
                  >
                    €{price}
                  </span>
                  <span
                    className={`text-sm ${
                      t.featured ? "text-white/60" : "text-foreground-muted"
                    }`}
                  >
                    /mo
                  </span>
                </div>
                {cycle === "annual" && price > 0 && (
                  <div
                    className={`text-xs ${
                      t.featured ? "text-white/60" : "text-foreground-subtle"
                    }`}
                  >
                    billed €{price * 12}/year
                  </div>
                )}

                <Link
                  href={t.isContactSales ? "#waitlist" : "#waitlist"}
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                    t.featured
                      ? "bg-white text-foreground hover:bg-white/90"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  {t.isContactSales && <Phone className="h-3.5 w-3.5" />}
                  {t.cta}
                </Link>

                <ul
                  className={`mt-6 space-y-2.5 text-sm ${
                    t.featured ? "text-white/85" : "text-foreground"
                  }`}
                >
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          t.featured ? "text-white" : "text-success"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-foreground-subtle">
          Prices in EUR, exclusive of VAT. Invoiced from our Irish entity. Cancel anytime
          from your dashboard, no clawback.
        </p>
      </div>
    </section>
  );
}
