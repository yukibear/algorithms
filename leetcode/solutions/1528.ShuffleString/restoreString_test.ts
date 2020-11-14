import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import restoreString from "./restoreString.ts";

Deno.test("1528. Shuffle String", () => {
  type test = [[string, number[]], string];
  const tests: test[] = [
    [
      ["codeleet", [4, 5, 6, 7, 0, 2, 1, 3]],
      "leetcode",
    ],
    [
      ["abc", [0, 1, 2]],
      "abc",
    ],

    [
      ["aiohn", [3, 1, 4, 2, 0]],
      "nihao",
    ],
    [
      ["aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]],
      "arigatou",
    ],
    [
      ["art", [1, 0, 2]],
      "rat",
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(restoreString(...args), want);
  }
});
