import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import peakIndexInMountainArray from "./peakIndexInMountainArray.ts";

test("0852. Peak Index in a Mountain Array", () => {
  assertEquals(peakIndexInMountainArray([0, 1, 0]), 1);
  assertEquals(peakIndexInMountainArray([0, 2, 1, 0]), 1);
  assertEquals(peakIndexInMountainArray([3, 4, 5, 1]), 2);
});
