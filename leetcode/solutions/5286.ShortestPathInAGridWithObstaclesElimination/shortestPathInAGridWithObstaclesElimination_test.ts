import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import shortestPath from "./shortestPath.ts";

test("5286. Shortest Path in a Grid with Obstacles Elimination", () => {
  let grid = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 0]
  ];
  assertEquals(shortestPath(grid, 1), 6);

  grid = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 0, 0]
  ];
  assertEquals(shortestPath(grid, 1), -1);
});
