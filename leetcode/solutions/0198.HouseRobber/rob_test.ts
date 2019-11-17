import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import rob from "./rob.ts";

test("0198. House Robber", () => {
  assertEquals(rob([1,2,3,1]), 4);
  assertEquals(rob([2,7,9,3,1]), 12);
});
