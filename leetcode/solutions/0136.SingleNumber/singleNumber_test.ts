import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import singleNumber from "./singleNumber.ts";

test("0136. Single Number", () => {
  assertEquals(singleNumber([2,2,1]), 1);
  assertEquals(singleNumber([4,1,2,1,2]), 4);
});
