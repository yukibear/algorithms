import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import insertIntoBST from "./insertIntoBST.ts";
import { TreeNode } from "../../../data_structures/TreeNode.ts";

test("0701. Insert into a Binary Search Tree", () => {
  let tree1: TreeNode<number> = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: { val: 7, left: null, right: null },
  }
  let expected: TreeNode<number> = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 7,
      left: { val: 5, left: null, right: null },
      right: null
    },
  }
  assertEquals(insertIntoBST(tree1, 5), expected);
});
