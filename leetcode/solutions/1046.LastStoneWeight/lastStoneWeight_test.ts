import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import lastStoneWeight from "./lastStoneWeight.ts";

Deno.test("1046. Last Stone Weight", () => {
  assertEquals(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
  assertEquals(lastStoneWeight([3, 7, 8]), 2);
});
