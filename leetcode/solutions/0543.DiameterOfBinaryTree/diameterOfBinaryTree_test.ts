import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import diameterOfBinaryTree from "./diameterOfBinaryTree.ts";
import {
  createBinaryTreeNode,
  BinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0543. Diameter of Binary Tree", () => {
  type test = [BinaryTreeNode<number> | null, number];
  const tests: test[] = [
    [null, 0],
    [createBinaryTreeNode([1]), 0],
    [createBinaryTreeNode([1, 2]), 1],
    [createBinaryTreeNode([1, 2, 3]), 2],
    [createBinaryTreeNode([1, null, 2]), 1],
    [createBinaryTreeNode([1, 2, null, 3]), 2],
  ];

  for (const [arg1, want] of tests) {
    assertEquals(diameterOfBinaryTree(arg1), want);
  }
});
