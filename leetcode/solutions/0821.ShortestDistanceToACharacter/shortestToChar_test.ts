import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import shortestToChar from "./shortestToChar.ts";

test("0821. Shortest Distance to a Character", () => {
  assertEquals(shortestToChar("loveleetcode", "e"), [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  assertEquals(shortestToChar("aaba", "b"), [2,1,0,1]);
});
