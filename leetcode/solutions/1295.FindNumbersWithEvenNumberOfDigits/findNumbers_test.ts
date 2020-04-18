import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findNumbers from "./findNumbers.ts";

Deno.test("1295. Find Numbers with Even Number of Digits", () => {
  assertEquals(findNumbers([12, 345, 2, 6, 7896]), 2);
});
