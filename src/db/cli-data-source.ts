import "server-only";
import "reflect-metadata";
import { loadEnvConfig } from "@next/env";
import { DataSource } from "typeorm";
import { getDataSourceOptions } from "@/db/options";
loadEnvConfig(process.cwd());
const dataSource = new DataSource(getDataSourceOptions());
export default dataSource;
