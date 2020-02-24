import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { levelOrder_DFS, levelOrder_BFS } from "./levelOrder.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

const sorter = (arr1: number[], arr2: number[]) => {
  arr1.sort();
  arr2.sort();

  if (arr1.length !== arr2.length) {
    arr1.length - arr2.length;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i] - arr2[i];
    }
  }

  return 0;
}

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(
      func(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])!).sort(sorter),
      [[3], [9, 20], [15, 7]].sort(sorter)
    );
  }
}

test("0102. Binary Tree Level Order Traversal / DFS", createTestFunc(levelOrder_DFS));
test("0102. Binary Tree Level Order Traversal / BFS", createTestFunc(levelOrder_BFS));
