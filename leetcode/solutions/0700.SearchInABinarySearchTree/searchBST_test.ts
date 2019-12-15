import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import searchBST from "./searchBST.ts";
import { TreeNode } from "../../../data_structures/TreeNode.ts";

test("0700. Search in a Binary Search Tree", () => {
  let tree: TreeNode<number> = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: { val: 7, left: null, right: null },
  };
  let expected: TreeNode<number> = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  assertEquals(searchBST(tree, 2), expected);
});
