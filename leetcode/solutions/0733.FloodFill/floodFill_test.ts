import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import floodFill from "./floodFill.ts";

test("0733. Flood Fill", () => {
  let image = [[1,1,1],[1,1,0],[1,0,1]];
  let sr = 1, sc = 1, newColor = 2;
  let expected = [[2,2,2],[2,2,0],[2,0,1]];
  assertEquals(floodFill(image, sr, sc, newColor), expected);


  image = [[0,0,0],[0,0,0]];
  sr = 0, sc = 0, newColor = 2;
  expected = [[2,2,2],[2,2,2]];
  assertEquals(floodFill(image, sr, sc, newColor), expected);

  image = [[0,0,0],[0,1,1]];
  sr = 1, sc = 1, newColor = 1;
  expected = image;
  assertEquals(floodFill(image, sr, sc, newColor), expected);
});
