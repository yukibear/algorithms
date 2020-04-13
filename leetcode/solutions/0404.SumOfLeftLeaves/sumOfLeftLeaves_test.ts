import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sumOfLeftLeaves from "./sumOfLeftLeaves.ts";
import {
  BinaryTreeNode,
  createBinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0198. House Robber", () => {
  type test = [BinaryTreeNode<number> | null, number];
  const tests: test[] = [
    [createBinaryTreeNode([3, 9, 20, null, null, 15, 7]), 24],
  ];

  for (const [arg, want] of tests) {
    assertEquals(sumOfLeftLeaves(arg), want);
  }
});
