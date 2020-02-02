import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import kWeakestRows from "./kWeakestRows.ts";

test("1341. The K Weakest Rows in a Matrix", () => {
  assertEquals(
    kWeakestRows(
      [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ],
      3
    ),
    [2, 0, 3]
  );
});
