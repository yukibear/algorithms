import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import judgeSquareSum from "./judgeSquareSum.ts";

Deno.test("0633. Sum of Square Numbers", () => {
  assertEquals(judgeSquareSum(5), true);
  assertEquals(judgeSquareSum(3), false);
});
