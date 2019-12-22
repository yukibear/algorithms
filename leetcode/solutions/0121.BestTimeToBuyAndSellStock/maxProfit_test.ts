import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxProfit from "./maxProfit.ts";

test("0121. Best Time to Buy and Sell Stock", () => {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
