import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isBalanced from "./isBalanced.ts";
import TreeNode from "../../../data_structures/TreeNode.ts";

test("0110. Balanced Binary Tree", () => {
  let testTree: TreeNode = {
    val: 3,
    left: { val: 9 },
    right: {
      val: 20,
      left: { val: 15 },
      right: { val: 7 },
    }
  }
  assertEquals(isBalanced(testTree), true);

  testTree = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: { val: 4 },
        right: { val: 4 },
      },
      right: { val: 3 },
    },
    right: { val: 2 },
  }
  assertEquals(isBalanced(testTree), false);
  assertEquals(isBalanced(), true);
  assertEquals(isBalanced({ val: 1 }), true);
  testTree = {
    val: 1,
    left: { val: 2 },
  }
  assertEquals(isBalanced({ val: 1 }), true);
});
