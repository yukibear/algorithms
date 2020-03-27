import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import postorderTraversal from "./postorderTraversal.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

function createTestFunction(func: Function) {
  return () => {
    assertEquals(func(createBinaryTreeNode([])), []);
    assertEquals(func(createBinaryTreeNode([1, null, 2, 3])), [3, 2, 1]);
    assertEquals(func(createBinaryTreeNode([3, 2, 4, null, null, 1])), [
      2,
      1,
      4,
      3,
    ]);
  };
}

Deno.test(
  "0145. Binary Tree Postorder Traversal",
  createTestFunction(postorderTraversal)
);
