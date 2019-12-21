import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import climbStairs from "./climbStairs.ts";

test("0070. Climbing Stairs", () => {
  assertEquals(climbStairs(2), 2);
  assertEquals(climbStairs(3), 3);
  assertEquals(climbStairs(4), 5);
});
