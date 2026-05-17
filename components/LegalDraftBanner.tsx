import { AlertCircle } from "lucide-react";

export function LegalDraftBanner() {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-md border border-warning/30 bg-warning-soft px-4 py-3 text-sm">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
      <div className="text-foreground">
        <strong className="text-warning">Draft, under counsel review.</strong>{" "}
        This document describes our intended terms in plain language. The
        final binding version, reviewed by our solicitors, will be
        published before paid signups open. For the current draft of any
        specific clause, email{" "}
        <a
          href="mailto:paulo@myneatflow.com"
          className="text-accent hover:underline"
        >
          paulo@myneatflow.com
        </a>
        .
      </div>
    </div>
  );
}
