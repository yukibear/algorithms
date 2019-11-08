import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import twoSum from "./twoSum.ts";

test("0001. Two Sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([2, 7, 11, 15], 18), [1, 2]);
});
