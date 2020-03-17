import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { minChange_DP, minChange_DFS } from "./minChange.ts";

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(func([1, 4], 3), 3);
    assertEquals(func([1, 2, 4, 8, 16, 32], 63), 6);
    assertEquals(func([1, 5, 10, 50, 100, 500], 324), 9);
    assertEquals(func([1, 4, 9], 17), 3);
  };
};

Deno.test("0002. Coin Exchange / DP", createTestFunc(minChange_DP));
Deno.test("0002. Coin Exchange / DFS", createTestFunc(minChange_DFS));
