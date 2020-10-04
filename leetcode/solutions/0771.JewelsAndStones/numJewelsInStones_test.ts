import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import numJewelsInStones from "./numJewelsInStones.ts";

Deno.test("0771. Jewels and Stones", () => {
  assertStrictEquals(numJewelsInStones("aA", "aAAbbbb"), 3);
  assertStrictEquals(numJewelsInStones("z", "ZZ"), 0);
});
