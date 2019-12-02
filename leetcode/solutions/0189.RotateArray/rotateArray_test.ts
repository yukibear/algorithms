import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import rotateArray from "./rotateArray.ts";

test("0189. Rotate Array", () => {
  let testArr = [1, 2, 3, 4, 5, 6, 7];
  rotateArray(testArr, 3);
  assertEquals(testArr, [5, 6, 7, 1, 2, 3, 4]);

  testArr = [-1, -100, 3, 99];
  rotateArray(testArr, 2);
  assertEquals(testArr, [3, 99, -1, -100]);
});
