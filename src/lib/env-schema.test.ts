import { describe, expect, it } from "vitest";
import {
  parseEnvironment,
  publicEnvSchema,
  serverEnvSchema,
} from "@/lib/env-schema";
describe("environment boundaries", () => {
  it("allows the marketing site to boot without integration credentials", () => {
    expect(
      parseEnvironment(serverEnvSchema, {
        DATABASE_URL: "",
        SUPABASE_SERVICE_ROLE_KEY: "",
      }),
    ).toEqual({
      DATABASE_URL: undefined,
      SUPABASE_SERVICE_ROLE_KEY: undefined,
    });
  });
  it("rejects malformed database URLs without leaking the input", () => {
    expect(() =>
      parseEnvironment(serverEnvSchema, {
        DATABASE_URL: "https://private:secret@example.com",
      }),
    ).toThrow("Invalid environment configuration: DATABASE_URL");
  });
  it("strips private values from the public schema", () => {
    expect(
      parseEnvironment(publicEnvSchema, {
        DATABASE_URL: "postgres://private",
        SUPABASE_SERVICE_ROLE_KEY: "secret",
      }),
    ).toEqual({});
  });
});
