import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minCostClimbingStairs from "./minCostClimbingStairs.ts";

Deno.test("0746. Min Cost Climbing Stairs", () => {
  assertEquals(minCostClimbingStairs([10, 15, 20]), 15);
  assertEquals(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
});
