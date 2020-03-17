import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import repeatedNTimes from "./repeatedNTimes.ts";

Deno.test("0961. N-Repeated Element in Size 2N Array", () => {
  assertEquals(repeatedNTimes([1, 2, 3, 3]), 3);
  assertEquals(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
  assertEquals(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5);
});
