import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minTaps from "./minTaps.ts";

Deno.test("1326. Minimum Number of Taps to Open to Water a Garden", () => {
  assertEquals(minTaps(5, [3, 4, 1, 1, 0, 0]), 1);
  assertEquals(minTaps(3, [0, 0, 0, 0]), -1);
  assertEquals(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]), 3);
  assertEquals(minTaps(8, [4, 0, 0, 0, 0, 0, 0, 0, 4]), 2);
  assertEquals(minTaps(8, [4, 0, 0, 0, 4, 0, 0, 0, 4]), 1);
  assertEquals(minTaps(9, [0, 5, 0, 3, 3, 3, 1, 4, 0, 4]), 2);
  assertEquals(
    minTaps(17, [0, 3, 3, 2, 2, 4, 2, 1, 5, 1, 0, 1, 2, 3, 0, 3, 1, 1]),
    3
  );
  assertEquals(
    minTaps(35, [
      1,
      0,
      4,
      0,
      4,
      1,
      4,
      3,
      1,
      1,
      1,
      2,
      1,
      4,
      0,
      3,
      0,
      3,
      0,
      3,
      0,
      5,
      3,
      0,
      0,
      1,
      2,
      1,
      2,
      4,
      3,
      0,
      1,
      0,
      5,
      2
    ]),
    6
  );
});
