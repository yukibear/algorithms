import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxPathSum from "./maxPathSum.ts";
import {
  createBinaryTreeNode,
  BinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0124. Binary Tree Maximum Path Sum", () => {
  type test = [BinaryTreeNode<number>, number];
  const tests: test[] = [
    [createBinaryTreeNode([1, 2, 3])!, 6],
    [createBinaryTreeNode([-10, 9, 20, null, null, 15, 7])!, 42],
  ];

  for (const [root, want] of tests) {
    assertEquals(maxPathSum(root), want);
  }
});
