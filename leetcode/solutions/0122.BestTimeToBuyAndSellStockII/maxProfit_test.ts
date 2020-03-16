import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxProfit from "./maxProfit.ts";

Deno.test("0122. Best Time to Buy and Sell Stock II", () => {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 7);
  assertEquals(maxProfit([1, 2, 3, 4, 5]), 4);
  assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
