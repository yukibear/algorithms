import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findTarget_DFS from "./findTarget_DFS.ts";
import findTarget_SortedArray from "./findTarget_SortedArray.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

function createTest(func: Function) {
  return () => {
    assertEquals(func(createBinaryTreeNode([5, 3, 6, 2, 4, null, 7]), 9), true);
    assertEquals(
      func(createBinaryTreeNode([5, 3, 6, 2, 4, null, 7]), 28),
      false
    );
  };
}

test(
  "0653. Two Sum IV - Input is a BST / DFS solution",
  createTest(findTarget_DFS)
);
test(
  "0653. Two Sum IV - Input is a BST / Sorted array solution",
  createTest(findTarget_SortedArray)
);
