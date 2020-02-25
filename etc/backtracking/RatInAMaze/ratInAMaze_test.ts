import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import ratInAMaze from "./ratInAMaze.ts";

Deno.test("0001. Rat in a Maze", () => {
  const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 2]
  ];

  const result = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1]
  ];

  assertEquals(ratInAMaze(maze), result);

  const maze2 = [
    [1, 0, 0, 1, 0, 0, 2],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 0]
  ];

  const result2 = [
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0]
  ];

  assertEquals(ratInAMaze(maze2), result2);
});
