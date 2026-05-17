import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

type Payload = {
  email?: string;
  persona?: "vendor" | "entity";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const persona = body.persona;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (persona !== "vendor" && persona !== "entity") {
    return NextResponse.json(
      { error: "Persona must be 'vendor' or 'entity'." },
      { status: 400 }
    );
  }

  const entry = {
    email,
    persona,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? null,
  };

  // For now: log to console and append to a local JSONL file under .data/
  // When Supabase is set up, swap this for an insert into a `waitlist` table.
  try {
    const dataDir = path.join(process.cwd(), ".data");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, "waitlist.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf8"
    );
  } catch (err) {
    // Don't fail the request if the local write fails — the user shouldn't see that.
    console.error("[waitlist] Failed to persist entry:", err);
  }

  console.log("[waitlist] New signup:", entry);

  return NextResponse.json({ ok: true });
}
