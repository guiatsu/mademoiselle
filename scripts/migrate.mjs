import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const [command, ...args] = process.argv.slice(2);
if (
  !command ||
  ![
    "migration:generate",
    "migration:run",
    "migration:revert",
    "migration:show",
  ].includes(command)
) {
  console.error("Unsupported migration command.");
  process.exit(1);
}
if (command === "migration:generate" && !args[0]) {
  console.error(
    "Usage: pnpm db:migration:generate src/db/migrations/<migration-name>",
  );
  process.exit(1);
}
const result = spawnSync(
  process.execPath,
  [
    "--conditions=react-server",
    "-r",
    "ts-node/register",
    "-r",
    "tsconfig-paths/register",
    require.resolve("typeorm/cli.js"),
    command,
    ...args,
    "-d",
    "src/db/cli-data-source.ts",
  ],
  {
    stdio: "inherit",
    env: { ...process.env, TS_NODE_PROJECT: "tsconfig.db.json" },
  },
);
if (result.error) {
  console.error("Could not start migration CLI.");
  process.exit(1);
}
process.exit(result.status ?? 1);
