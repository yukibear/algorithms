import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import generate from "./generate.ts";

test("0118. Pascals Triangle", () => {
  assertEquals(generate(5), [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ]);
});
