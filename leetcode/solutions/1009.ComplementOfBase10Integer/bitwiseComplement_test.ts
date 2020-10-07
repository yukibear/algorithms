import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import bitwiseComplement from "./bitwiseComplement.ts";

Deno.test("1009. Complement of Base 10 Integer", () => {
  type test = [number, number];
  const tests: test[] = [
    [0, 1],
    [5, 2],
    [7, 0],
    [10, 5],
  ];

  for (const [arg, want] of tests) {
    assertEquals(bitwiseComplement(arg), want);
  }
});
