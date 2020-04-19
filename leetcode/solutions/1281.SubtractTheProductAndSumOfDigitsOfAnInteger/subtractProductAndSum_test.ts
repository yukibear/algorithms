import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import subtractProductAndSum from "./subtractProductAndSum.ts";

Deno.test("1281. Subtract the Product and Sum of Digits of an Integer", () => {
  type test = [number, number];
  const tests: test[] = [
    [0, 0],
    [1, 0],
    [999999, 531387],
    [999990, -45],
    [4420, -10],
    [234, 15],
    [4421, 21],
  ];

  for (const [arg, want] of tests) {
    assertEquals(subtractProductAndSum(arg), want);
  }
});
