import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import twoSum from "./twoSum.ts";

test("0167. Two Sum II - Input array is sorted", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [1, 2]);
  assertEquals(twoSum([2, 7, 11, 15], 18), [2, 3]);
});
