import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minChange from "./minChange.ts";

test("0002. Coin Exchange", () => {
  assertEquals(minChange([1, 2, 4, 8, 16, 32], 63), 6);
  assertEquals(minChange([1, 5, 10, 50, 100, 500], 324), 9);
  assertEquals(minChange([1, 4, 9], 17), 3);
});
