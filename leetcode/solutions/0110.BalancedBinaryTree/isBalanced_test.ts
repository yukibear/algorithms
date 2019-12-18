import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isBalanced from "./isBalanced.ts";
import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0110. Balanced Binary Tree", () => {
  let testTree: BinaryTreeNode<number> = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    }
  }
  assertEquals(isBalanced(testTree), true);

  testTree = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
      right: { val: 3, left: null, right: null },
    },
    right: { val: 2, left: null, right: null },
  }
  assertEquals(isBalanced(testTree), false);
  assertEquals(isBalanced(null), true);
  assertEquals(isBalanced({ val: 1, left: null, right: null }), true);
  testTree = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  }
  assertEquals(isBalanced({ val: 1, left: null, right: null }), true);
});
