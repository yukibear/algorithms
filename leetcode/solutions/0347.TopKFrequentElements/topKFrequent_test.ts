import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import topKFrequent from "./topKFrequent.ts";

test("0347. Top K Frequent Elements", () => {
  assertEquals(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
  assertEquals(topKFrequent([1], 1), [1]);
});
