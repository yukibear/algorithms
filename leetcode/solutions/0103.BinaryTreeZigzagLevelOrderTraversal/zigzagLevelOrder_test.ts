import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import zigzagLevelOrder from "./zigzagLevelOrder.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(func(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])!), [
      [3],
      [20, 9],
      [15, 7],
    ]);
  };
};

Deno.test(
  "0103. Binary Tree Zigzag Level Order Traversal",
  createTestFunc(zigzagLevelOrder)
);
