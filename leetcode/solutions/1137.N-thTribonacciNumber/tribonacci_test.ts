import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import tribonacci from "./tribonacci.ts";

test("1137. N-th Tribonacci Number", () => {
  assertEquals(tribonacci(4), 4);
  assertEquals(tribonacci(25), 1389537);
});
