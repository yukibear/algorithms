import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import largestSumAfterKNegations from "./largestSumAfterKNegations.ts";

Deno.test("1005. Maximize Sum Of Array After K Negations", () => {
  assertEquals(largestSumAfterKNegations([4, 2, 3], 1), 5);
  assertEquals(largestSumAfterKNegations([3, -1, 0, 2], 3), 6);
  assertEquals(largestSumAfterKNegations([2, -3, -1, 5, -4], 2), 13);
  assertEquals(largestSumAfterKNegations([5, 6, 9, -3, 3], 2), 20);
});
