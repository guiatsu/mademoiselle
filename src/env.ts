import "server-only";
import { parseEnvironment, serverEnvSchema } from "@/lib/env-schema";
export function getServerEnv() {
  return parseEnvironment(serverEnvSchema, {
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  });
}
