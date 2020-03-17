import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxSubArray from "./maxSubArray.ts";

Deno.test("0053. Maximum Subarray", () => {
  assertEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});
