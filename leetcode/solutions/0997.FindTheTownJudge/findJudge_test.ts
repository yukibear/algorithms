import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findJudge from "./findJudge.ts";

Deno.test("0997. Find the Town Judge", () => {
  assertEquals(findJudge(2, [[1, 2]]), 2);
  assertEquals(
    findJudge(3, [
      [1, 3],
      [2, 3]
    ]),
    3
  );
  assertEquals(
    findJudge(3, [
      [1, 3],
      [2, 3],
      [3, 1]
    ]),
    -1
  );
  assertEquals(
    findJudge(3, [
      [1, 2],
      [2, 3]
    ]),
    -1
  );
  assertEquals(
    findJudge(4, [
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [4, 3]
    ]),
    3
  );
  assertEquals(findJudge(1, []), 1);
  assertEquals(
    findJudge(11, [
      [1, 8],
      [1, 3],
      [2, 8],
      [2, 3],
      [4, 8],
      [4, 3],
      [5, 8],
      [5, 3],
      [6, 8],
      [6, 3],
      [7, 8],
      [7, 3],
      [9, 8],
      [9, 3],
      [11, 8],
      [11, 3]
    ]),
    -1
  );
});
