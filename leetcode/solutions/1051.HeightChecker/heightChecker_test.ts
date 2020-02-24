import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import heightChecker from "./heightChecker.ts";

test("1051. Height Checker", () => {
  assertEquals(heightChecker([1, 1, 4, 2, 1, 3]), 3);
  assertEquals(heightChecker([4, 2, 1, 1]), 4);
});
