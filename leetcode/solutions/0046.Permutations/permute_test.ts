import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { permute_DFS, permute_BFS } from "./permute.ts";

const createTest = (func: Function) => {
  return () => {
    const sorter = (arr1: number[], arr2: number[]) => {
      for (const i of arr1.keys()) {
        if (arr1[i] !== arr2[i]) {
          return arr1[i] - arr2[i];
        }
      }

      return 0;
    };

    const result = func([1, 2, 3]);
    result.sort(sorter);

    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];
    expected.sort(sorter);

    assertEquals(result, expected);
  };
};

Deno.test("0046. Permutations / DFS", createTest(permute_DFS));
Deno.test("0046. Permutations / BFS", createTest(permute_BFS));
