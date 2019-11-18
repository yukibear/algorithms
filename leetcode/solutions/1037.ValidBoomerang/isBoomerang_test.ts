import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isBoomerang from "./isBoomerang.ts";

test("1037. Valid Boomerang", () => {
  assertEquals(isBoomerang([[1,1],[2,3],[3,2]]), true);
  assertEquals(isBoomerang([[1,1],[2,2],[3,3]]), false);
});
