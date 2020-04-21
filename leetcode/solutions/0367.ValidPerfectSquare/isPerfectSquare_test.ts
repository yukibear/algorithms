import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPerfectSquare from "./isPerfectSquare.ts";

Deno.test("0367. Valid Perfect Square", () => {
  assertEquals(isPerfectSquare(16), true);
  assertEquals(isPerfectSquare(14), false);
});
