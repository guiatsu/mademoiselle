import { beforeEach, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ initialize: vi.fn(), construct: vi.fn() }));
vi.mock("server-only", () => ({}));
vi.mock("@/db/options", () => ({ getDataSourceOptions: () => ({}) }));
vi.mock("typeorm", () => ({
  DataSource: class {
    isInitialized = false;
    constructor() {
      mocks.construct();
    }
    async initialize() {
      await mocks.initialize();
      this.isInitialized = true;
      return this;
    }
  },
}));
import { getDataSource } from "@/db/data-source";
beforeEach(() => {
  globalThis.mademoiselleDatabase = undefined;
  mocks.initialize.mockReset();
  mocks.construct.mockClear();
});
it("shares initialization and the pool across concurrent callers", async () => {
  const first = getDataSource();
  const second = getDataSource();
  expect(first).toBe(second);
  const source = await first;
  expect(await getDataSource()).toBe(source);
  expect(mocks.construct).toHaveBeenCalledTimes(1);
  expect(mocks.initialize).toHaveBeenCalledTimes(1);
});
it("allows retry after failed initialization", async () => {
  mocks.initialize.mockRejectedValueOnce(new Error("unavailable"));
  await expect(getDataSource()).rejects.toThrow("unavailable");
  await expect(getDataSource()).resolves.toBeDefined();
  expect(mocks.construct).toHaveBeenCalledTimes(2);
});
