import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import NumArray from "./NumArray.ts";

Deno.test("0303. Range Sum Query - Immutable", () => {
  const obj = new NumArray([-2, 0, 3, -5, 2, -1]);

  assertEquals(obj.sumRange(0, 2), 1);
  assertEquals(obj.sumRange(2, 5), -1);
  assertEquals(obj.sumRange(0, 5), -3);
});
