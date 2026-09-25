import "server-only";
import type { DataSourceOptions } from "typeorm";
import { getServerEnv } from "@/env";
/** Explicit registries work in bundled Next.js output and in the migration CLI. */
export function getDataSourceOptions(): DataSourceOptions {
  const { DATABASE_URL: url } = getServerEnv();
  if (!url)
    throw new Error("DATABASE_URL is required for database operations.");
  return {
    type: "postgres",
    url,
    synchronize: false,
    migrationsRun: false,
    logging: false,
    entities: [],
    migrations: [],
    migrationsTableName: "typeorm_migrations",
    poolSize: 5,
    extra: { connectionTimeoutMillis: 10000, idleTimeoutMillis: 30000 },
  };
}
