import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minSubArrayLen from "./minSubArrayLen.ts";

Deno.test("0209. Minimum Size Subarray Sum", () => {
  assertEquals(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
  assertEquals(minSubArrayLen(7, [2, 3, 1, 2, 4, 7, 0]), 1);
  assertEquals(minSubArrayLen(7, [2, 3, 1, 50, 4, 3]), 1);
  assertEquals(minSubArrayLen(11, [1, 2, 3, 4, 5]), 3);
  assertEquals(minSubArrayLen(3, [1, 1]), 0);
});
