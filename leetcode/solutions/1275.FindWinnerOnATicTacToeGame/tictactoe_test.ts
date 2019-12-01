import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import tictactoe from "./tictactoe.ts";

test("1275. Find Winner on a Tic Tac Toe Game", () => {
  assertEquals(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]), "A");
  assertEquals(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]), "B");
  assertEquals(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]), "Draw");
  assertEquals(tictactoe([[0,0],[1,1]]), "Pending");
  assertEquals(tictactoe([[1,2],[2,1],[1,0],[0,0],[0,1],[2,0],[1,1]]), "A");
});
