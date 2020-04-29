import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import bstFromPreorder from "./bstFromPreorder.ts";
import {
  BinaryTreeNode,
  createBinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("1008. Construct Binary Search Tree from Preorder Traversal", () => {
  type test = [number[], BinaryTreeNode<number> | null];
  const tests: test[] = [
    // [
    //   [8,5,1],
    //   createBinaryTreeNode([8,5,null,1]),
    // ],
    [[8, 5, 1, 7, 10, 12], createBinaryTreeNode([8, 5, 10, 1, 7, null, 12])],
  ];

  for (const [arg, want] of tests) {
    assertEquals(bstFromPreorder(arg), want);
  }
});
