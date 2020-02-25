import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import customSortString from "./customSortString.ts";

Deno.test("0791. Custom Sort String", () => {
  assertEquals(customSortString("cba", "abcd"), "cbad");
  assertEquals(customSortString("kqep", "pekeq"), "kqeep");
});
