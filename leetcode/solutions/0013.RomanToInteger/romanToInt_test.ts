import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import romanToInt from "./romanToInt.ts";

test("0013. Roman to Integer", () => {
  assertEquals(romanToInt("III"), 3);
  assertEquals(romanToInt("IV"), 4);
  assertEquals(romanToInt("IX"), 9);
  assertEquals(romanToInt("LVIII"), 58);
  assertEquals(romanToInt("MCMXCIV"), 1994);
});
