import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import intToRoman from "./intToRoman.ts";

Deno.test("0012. Integer to Roman", () => {
  assertEquals(intToRoman(3), "III");
  assertEquals(intToRoman(4), "IV");
  assertEquals(intToRoman(58), "LVIII");
  assertEquals(intToRoman(1994), "MCMXCIV");
});
