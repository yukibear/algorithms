import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import moveZeroes from "./moveZeroes.ts";

test("0283. Move Zeroes", () => {
  const arr1 = [0, 1, 0, 3, 12];
  moveZeroes(arr1)
  assertEquals(arr1, [1, 3, 12, 0, 0]);

  const arr2 = [1];
  moveZeroes(arr2)
  assertEquals(arr2, [1]);
});
