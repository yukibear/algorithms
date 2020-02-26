import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findSolution from "./findSolution.ts";

Deno.test("1237. Find Positive Integer Solution for a Given Equation", () => {
  const sorter = (a: [number, number], b: [number, number]) => a[0] - b[0];

  const func1 = { f: (x: number, y: number) => x + y };
  assertEquals(findSolution(func1, 1).sort(sorter), []);
  assertEquals(findSolution(func1, 2).sort(sorter), [[1, 1]]);
  assertEquals(findSolution(func1, 3).sort(sorter), [
    [1, 2],
    [2, 1]
  ]);

  const func2 = { f: (x: number, y: number) => x + y * 2 };
  assertEquals(findSolution(func2, 1).sort(sorter), []);
  assertEquals(findSolution(func2, 2).sort(sorter), []);
  assertEquals(findSolution(func2, 3).sort(sorter), [[1, 1]]);
  assertEquals(findSolution(func2, 4).sort(sorter), [[2, 1]]);
  assertEquals(findSolution(func2, 5).sort(sorter), [
    [1, 2],
    [3, 1]
  ]);
});
