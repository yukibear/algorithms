import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findContentChildren from "./findContentChildren.ts";

Deno.test("0455. Assign Cookies", () => {
  assertEquals(findContentChildren([1, 2, 3], [1, 1]), 1);
  assertEquals(findContentChildren([1, 2], [1, 2, 3]), 2);
});
