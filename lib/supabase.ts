/**
 * Supabase client stub.
 *
 * When you have a Supabase project:
 *   1. npm install @supabase/supabase-js
 *   2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 *   3. Uncomment the import and the createClient call below
 *
 * For now we export typed placeholders so the rest of the codebase can compile
 * without a network dependency.
 */

export type SupabaseClient = {
  // Add real methods as we wire them up.
  isStub: true;
};

export function getSupabase(): SupabaseClient {
  return { isStub: true };
}

// Future implementation:
//
// import { createClient } from "@supabase/supabase-js";
//
// const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//
// if (!url || !anon) {
//   throw new Error("Missing Supabase env vars");
// }
//
// export const supabase = createClient(url, anon);
