import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import nextGreatestLetter from "./nextGreatestLetter.ts";

Deno.test("0744. Find Smallest Letter Greater Than Target", () => {
  assertEquals(nextGreatestLetter(["c", "f", "j"], "a"), "c");
  assertEquals(nextGreatestLetter(["c", "f", "j"], "c"), "f");
  assertEquals(nextGreatestLetter(["c", "f", "j"], "d"), "f");
  assertEquals(nextGreatestLetter(["c", "f", "j"], "g"), "j");
  assertEquals(nextGreatestLetter(["c", "f", "j"], "j"), "c");
  assertEquals(nextGreatestLetter(["c", "f", "j"], "k"), "c");
  assertEquals(
    nextGreatestLetter(
      ["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"],
      "e"
    ),
    "n"
  );
});
