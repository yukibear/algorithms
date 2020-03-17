import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import printVertically from "./printWordsVertically.ts";

Deno.test("1324. Print Words Vertically", () => {
  assertEquals(printVertically("TO BE OR NOT TO BE"), [
    "TBONTB",
    "OEROOE",
    "   T"
  ]);
  assertEquals(printVertically("AA BBB C DDDD EEEEE F"), [
    "ABCDEF",
    "AB DE",
    " B DE",
    "   DE",
    "    E"
  ]);
});
