import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import stringShift from "./stringShift.ts";

Deno.test("6001. Perform String Shifts", () => {
  type args = [string, [number, number][]];
  type test = [args, string];
  const tests: test[] = [
    [
      [
        "abc",
        [
          [0, 1],
          [1, 2],
        ],
      ],
      "cab",
    ],
    [
      [
        "abcdefg",
        [
          [1, 1],
          [1, 1],
          [0, 2],
          [1, 3],
        ],
      ],
      "efgabcd",
    ],
    [
      [
        "wpdhhcj",
        [
          [0, 7],
          [1, 7],
          [1, 0],
          [1, 3],
          [0, 3],
          [0, 6],
          [1, 2],
        ],
      ],
      "hcjwpdh",
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(stringShift(...args), want);
  }
});
