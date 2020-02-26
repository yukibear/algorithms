import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import subsets from "./subsets.ts";

Deno.test("0078. Subsets", () => {
  const sorter = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
      return arr1.length - arr2.length;
    }

    for (const i of arr1.keys()) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] - arr2[i];
      }
    }

    return 0;
  };

  const got = subsets([1, 2, 3]).sort(sorter);
  const want = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []].sort(
    sorter
  );

  assertEquals(got, want);
});
