import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { TreeNode } from "../../../data_structures/TreeNode.ts";
import trimBST from "./trimBST.ts";

test("0669. Trim a Binary Search Tree", () => {
  const treeNode1: TreeNode<number> = {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: { val: 2, left: null, right: null },
  }
  const expect1: TreeNode<number> = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  }
  assertEquals(trimBST(treeNode1, 1, 2), expect1);

  const treeNode2: TreeNode<number> = {
    val: 3,
    left: {
      val: 0,
      left: null,
      right: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: null,
      }
    },
    right: { val: 4, left: null, right: null },
  }
  const expect2: TreeNode<number> = {
    val: 3,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: null,
    },
    right: null,
  }
  assertEquals(trimBST(treeNode2, 1, 3), expect2);
});
