import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isCousins from "./isCousins.ts";
import {
  BinaryTreeNode,
  createBinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0993. Cousins in Binary Tree", () => {
  type args = [BinaryTreeNode<number> | null, number, number];
  type test = [args, boolean];
  const tests: test[] = [
    [[createBinaryTreeNode([1, 2, 3, 4]), 4, 3], false],
    [[createBinaryTreeNode([1, 2, 3, null, 4, null, 5]), 5, 4], true],
    [[createBinaryTreeNode([1, 2, 3, null, 4]), 2, 3], false],
  ];

  for (const [args, want] of tests) {
    assertEquals(isCousins(...args), want);
  }
});
