import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import checkPossibility from "./checkPossibility.ts";

Deno.test("0665. Non-decreasing Array - Easy", () => {
  assertEquals(checkPossibility([4, 2, 3]), true);
  assertEquals(checkPossibility([4, 2, 1]), false);
  assertEquals(checkPossibility([3, 4, 2, 3]), false);
});
