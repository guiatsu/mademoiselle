import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getServerEnv } from "@/env";
import { getSupabasePublicEnv } from "@/lib/public-env";
/** Bypasses RLS. Authorize every operation before using this client. */
export function createAdminClient() {
  const { url } = getSupabasePublicEnv();
  const { SUPABASE_SERVICE_ROLE_KEY: key } = getServerEnv();
  if (!key)
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is required for this operation.",
    );
  return createSupabaseClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
