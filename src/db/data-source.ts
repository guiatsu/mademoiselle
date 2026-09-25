import "server-only";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { getDataSourceOptions } from "@/db/options";
type DatabaseCache = {
  source?: DataSource;
  initializing?: Promise<DataSource>;
};
declare global {
  var mademoiselleDatabase: DatabaseCache | undefined;
}
/** Both the pool and in-flight initialization survive development hot reloads. */
export function getDataSource(): Promise<DataSource> {
  const cache = (globalThis.mademoiselleDatabase ??= {});
  if (cache.source?.isInitialized) return Promise.resolve(cache.source);
  if (cache.initializing) return cache.initializing;
  const source = (cache.source ??= new DataSource(getDataSourceOptions()));
  cache.initializing = source
    .initialize()
    .then(() => source)
    .catch((error: unknown) => {
      cache.source = undefined;
      throw error;
    })
    .finally(() => {
      cache.initializing = undefined;
    });
  return cache.initializing;
}
