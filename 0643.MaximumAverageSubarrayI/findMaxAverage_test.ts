import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findMaxAverage from "./findMaxAverage.ts";

test("0643. Maximum Average Subarray I", () => {
  assertEquals(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75);
});
