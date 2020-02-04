import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minSetSize from "./minSetSize.ts";

test("1342. Reduce Array Size to The Half", () => {
  assertEquals(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]), 2);
  assertEquals(minSetSize([7, 7, 7, 7, 7, 7]), 1);
  assertEquals(minSetSize([1, 9]), 1);
  assertEquals(minSetSize([1000, 1000, 3, 7]), 1);
  assertEquals(minSetSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5);
});
