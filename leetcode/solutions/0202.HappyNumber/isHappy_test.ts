import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isHappy from "./isHappy.ts";

Deno.test("0202. Happy Number", () => {
  type test = [number, boolean];
  const tests: test[] = [
    [1, true],
    [0, false],
    [100, true],
    [109, true],
    [19, true],
  ];

  for (const [arg1, want] of tests) {
    assertEquals(isHappy(arg1), want);
  }
});
