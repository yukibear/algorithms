import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import customSortString from "./customSortString.ts";

test("0791. Custom Sort String", () => {
  assertEquals(customSortString("cba", "abcd"), "cbad");
  assertEquals(customSortString("kqep", "pekeq"), "kqeep");
});
