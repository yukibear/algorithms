import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import printVertically from "./printWordsVertically.ts";

test("5316. Print Words Vertically", () => {
  assertEquals(printVertically("TO BE OR NOT TO BE"), ["TBONTB", "OEROOE", "   T"]);
  assertEquals(printVertically("AA BBB C DDDD EEEEE F"), ["ABCDEF","AB DE"," B DE","   DE","    E"]);
});
