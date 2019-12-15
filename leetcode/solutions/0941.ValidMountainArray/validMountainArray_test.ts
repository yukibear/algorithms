import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import validMountainArray from "./validMountainArray.ts";

test("0941. Valid Mountain Array", () => {
  assertEquals(validMountainArray([2,1]), false);
  assertEquals(validMountainArray([3,5,5]), false);
  assertEquals(validMountainArray([0,3,2,1]), true);
  assertEquals(validMountainArray([0,1,2,3,4,5,6,7,8,9]), false);
});
