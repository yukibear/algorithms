import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import shiftGrid from "./shiftGrid.ts";

Deno.test("5263. Shift 2D Grid", () => {
  let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ], k = 1;
  let expect = [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  assertEquals(shiftGrid(grid, k), expect);


    (grid = [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13]
    ]),
    (k = 4)
  ;
  expect = [
    [12, 0, 21, 13],
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10]
  ];
  assertEquals(shiftGrid(grid, k), expect);


    (grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]),
    (k = 9)
  ;
  expect = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  assertEquals(shiftGrid(grid, k), expect);
});
