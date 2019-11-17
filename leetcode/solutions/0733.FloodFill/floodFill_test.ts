import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import floodFill from "./floodFill.ts";

test("0733. Flood Fill", () => {
  let image = [[1,1,1],[1,1,0],[1,0,1]];
  let sr = 1, sc = 1, newColor = 2;
  assertEquals(floodFill(image, sr, sc, newColor), [[2,2,2],[2,2,0],[2,0,1]]);
});
