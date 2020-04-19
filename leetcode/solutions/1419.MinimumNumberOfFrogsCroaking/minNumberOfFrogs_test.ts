import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minNumberOfFrogs from "./minNumberOfFrogs.ts";

Deno.test("1419. Minimum Number of Frogs Croaking", () => {
  type test = [string, number];
  const tests: test[] = [
    ["croakcroak", 1],
    ["crcoakroak", 2],
    ["croakcrook", -1],
    ["croakcroa", -1],
    ["ccccccccc", -1],
    ["ccrrooaakk", 2],
  ];

  for (const [arg, want] of tests) {
    assertEquals(minNumberOfFrogs(arg), want);
  }
});
