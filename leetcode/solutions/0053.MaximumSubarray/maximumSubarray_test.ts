import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maximumSubarray from "./maximumSubarray.ts";

test("0053. Maximum Subarray", () => {
  assertEquals(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});
