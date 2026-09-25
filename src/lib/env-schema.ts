import { z } from "zod";
const optionalValue = (schema: z.ZodType<string>) =>
  z.preprocess(
    (value) => (value === "" ? undefined : value),
    schema.optional(),
  );
export const publicEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: optionalValue(z.url()),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: optionalValue(z.string().min(1)),
});
export const serverEnvSchema = z.object({
  DATABASE_URL: optionalValue(
    z
      .url()
      .refine(
        (value) =>
          ["postgres:", "postgresql:"].includes(new URL(value).protocol),
        "Expected a PostgreSQL URL",
      ),
  ),
  SUPABASE_SERVICE_ROLE_KEY: optionalValue(z.string().min(1)),
});
export function parseEnvironment<T>(schema: z.ZodType<T>, values: unknown): T {
  const result = schema.safeParse(values);
  if (!result.success) {
    // Report field names only; never include credential values in errors.
    throw new Error(
      `Invalid environment configuration: ${result.error.issues.map((issue) => issue.path.join(".")).join(", ")}`,
    );
  }
  return result.data;
}
